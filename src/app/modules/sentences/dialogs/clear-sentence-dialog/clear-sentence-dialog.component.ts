import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-clear-sentence-dialog',
  templateUrl: './clear-sentence-dialog.component.html',
  styleUrls: ['./clear-sentence-dialog.component.scss']
})
export class ClearSentenceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ClearSentenceDialogComponent>) { }

  ngOnInit(): void {
  }

  close(choice: boolean): void {
    this.dialogRef.close(choice);
  }

}
