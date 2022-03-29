import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirm-dialog',
  templateUrl: './exit-confirm-dialog.component.html',
  styleUrls: ['./exit-confirm-dialog.component.scss']
})
export class ExitConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ExitConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  close(choice: boolean): void {
    this.dialogRef.close(choice);
  }
}
