import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateSentenceComponent } from './modules/sentences/create-sentence/create-sentence.component';
import { ViewSentencesComponent } from './modules/sentences/view-sentences/view-sentences.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-sentences', component: ViewSentencesComponent },
  { path: 'create-sentence', component: CreateSentenceComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
