import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ExitConfirmDialogComponent } from './dialogs/exit-confirm-dialog/exit-confirm-dialog.component';



@NgModule({
  declarations: [
    ExitConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [
    NgMaterialModule,
    ExitConfirmDialogComponent
  ]
})
export class SharedModule { }
