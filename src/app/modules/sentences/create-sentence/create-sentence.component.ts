import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-sentence',
  templateUrl: './create-sentence.component.html',
  styleUrls: ['./create-sentence.component.scss']
})
export class CreateSentenceComponent implements OnInit {

  createSentenceForm: FormGroup
  sentenceArray: string[] = [];
  sentenceString: string;

  constructor(private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createSentenceForm = this.formBuilder.group({
      wordType: ["", []],
      word: ["", Validators.required]
    })
  }

  addToSentence(): void {
    let word = this.createSentenceForm.get('word')?.value;
    const firstWord = this.sentenceArray.length === 0;

    if (firstWord) {
      const firstLetter = word.substring(0, 1).toUpperCase();
      const restOfWord = word.substring(1);
     
      word = firstLetter + restOfWord;
    }

    this.sentenceArray.push(word);

    this.sentenceString = this.sentenceArray.join(' ');

    this.createSentenceForm.reset();
  }

  submitSentence(): void {
    this.matSnackBar.open("Sentence submitted", "Close", {
      duration: 2000
    });
  }

}
