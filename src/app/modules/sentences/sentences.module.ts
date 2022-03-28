import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSentenceComponent } from './create-sentence/create-sentence.component';
import { ViewSentencesComponent } from './view-sentences/view-sentences.component';



@NgModule({
  declarations: [
    CreateSentenceComponent,
    ViewSentencesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SentencesModule { }
