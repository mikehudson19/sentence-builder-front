import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class NgMaterialModule { }
