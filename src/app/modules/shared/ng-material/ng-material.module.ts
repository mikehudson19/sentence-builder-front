import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class NgMaterialModule { }
