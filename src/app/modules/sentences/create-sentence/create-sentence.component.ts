import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {map, Subject, Subscription, tap} from 'rxjs';
import { SentencesService } from 'src/app/services/sentences.service';
import { WordTypeService } from 'src/app/services/word-type.service';
import { WordService } from 'src/app/services/word.service';
import { IWord } from 'src/app/types/IWord';
import { IWordType } from 'src/app/types/IWordType';
import { ExitConfirmDialogComponent } from '../../shared/dialogs/exit-confirm-dialog/exit-confirm-dialog.component';
import { ClearSentenceDialogComponent } from '../dialogs/clear-sentence-dialog/clear-sentence-dialog.component';

@Component({
  selector: 'app-create-sentence',
  templateUrl: './create-sentence.component.html',
  styleUrls: ['./create-sentence.component.scss']
})
export class CreateSentenceComponent implements OnInit, OnDestroy {

  createSentenceForm: FormGroup
  sentenceArray: string[] = [];
  sentenceString: string;
  wordTypes: IWordType[] = [];
  words: IWord[] = [];
  loading = false;
  sub = new Subscription();
  canExit$: Subject<boolean> = new Subject<boolean>();

  validationMessages = {
    'wordType': [
      { type: 'required', message: 'A word type is required' }
    ],
    'word': [
      { type: 'required', message: 'A word is required' }
    ]
  }

  constructor(private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private wordTypeService: WordTypeService,
              private wordService: WordService,
              private sentenceService: SentencesService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.createSentenceForm = this.formBuilder.group({
      wordType: ["", [Validators.required]],
      word: ["", [Validators.required]]
    })

    this.retrieveWordTypes();

    this.retrieveWords();
  }

  retrieveWordTypes(): void {
      this.wordTypeService.list()
        .subscribe({
            next: (data) => {
              this.wordTypes = data;
            },
            error: (e) => {
              console.error(e);
              this.matSnackBar.open("Word type data couldn't be loaded!", "Close", { duration: 2000 });
            },
            complete: () => {}
        })
  }

  retrieveWords(): void {
    this.sub.add(
      this.createSentenceForm.get('wordType')?.valueChanges
      .subscribe((data: string) => {
        const selection = this.determineWordTypeSelection(data);
          this.wordService.list(selection)
            .subscribe((words) => {
              this.words = words;
            }
          );
      })
    )
  }

  determineWordTypeSelection(data: string): number {
    return this.wordTypes.findIndex(x => x.wordType === data) + 1;
  }

  addToSentence(): void {
    const wordTypeControl = this.createSentenceForm.get('wordType');
    const wordControl = this.createSentenceForm.get('word');

    if (wordTypeControl?.value == null) {
      wordTypeControl?.setErrors({required: true});
    }

    if (wordControl?.value == null) {
      wordControl?.setErrors({required: true});
    }

    if (!this.createSentenceForm.valid) {
      this.createSentenceForm.markAllAsTouched();
      this.createSentenceForm.markAsDirty();
      return;
    }

    let word = this.createSentenceForm.get('word')?.value;
    const firstWord = this.sentenceArray.length === 0;

    if (firstWord) {
      const firstLetter = word.substring(0, 1).toUpperCase();
      const restOfWord = word.substring(1);

      word = firstLetter + restOfWord;
    }

    this.sentenceArray.push(word);
    this.sentenceString = this.sentenceArray.join(' ');

    this.words = [];

    this.createSentenceForm.reset();
    this.createSentenceForm.get('word')?.setErrors(null);
    this.createSentenceForm.get('wordType')?.setErrors(null);
  }

  submitSentence(): void {
    const sentence = {
      value: this.sentenceString
    }
    this.loading = true;
    this.sentenceService.create(sentence)
      .subscribe({
        next: (v) => {},
        error: (e) => {
          this.matSnackBar.open("An unexpected error occured!", "Close", { duration: 2000 });
          this.loading = false;
        },
        complete: () => {
            this.matSnackBar.open("Sentence submitted!", "Close", { duration: 2000 });
            this.sentenceString = '';
            this.sentenceArray = [];
            this.loading = false;
        }}
      )
  }

  canExit() {
    if (this.sentenceArray.length > 0) {
      const exitConfirmDialog = this.matDialog.open(ExitConfirmDialogComponent);

      exitConfirmDialog.afterClosed()
        .subscribe((choice: boolean) => {
          this.canExit$.next(choice);
        })
      }
  }

  clearSentence(): void {
    const dialog = this.matDialog.open(ClearSentenceDialogComponent);

    dialog.afterClosed().subscribe(choice => {
      if (choice) {
        this.sentenceString = '';
        this.sentenceArray = [];
      }
      return;
    })
  }

  resetForm(): void {
    this.createSentenceForm.reset();
    this.createSentenceForm.get('word')?.setErrors(null);
    this.createSentenceForm.get('wordType')?.setErrors(null);
  }

  wordClick(): void {
    if (this.words.length === 0) {
      this.matSnackBar.open("Please select a word type!", "Close", { duration: 2000 })
    }
  }

  wordTypeClick(): void {
    if (this.wordTypes.length === 0) {
      this.matSnackBar.open("Sorry, we couldn't load the word types right now!", "Close", { duration: 2000 })
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
