import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSentenceComponent } from './create-sentence/create-sentence.component';
import { ViewSentencesComponent } from './view-sentences/view-sentences.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ClearSentenceDialogComponent } from './dialogs/clear-sentence-dialog/clear-sentence-dialog.component';



@NgModule({
  declarations: [
    CreateSentenceComponent,
    ViewSentencesComponent,
    ClearSentenceDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ]
})
export class SentencesModule { }
