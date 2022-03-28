import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSentenceComponent } from './create-sentence/create-sentence.component';
import { ViewSentencesComponent } from './view-sentences/view-sentences.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateSentenceComponent,
    ViewSentencesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SentencesModule { }
