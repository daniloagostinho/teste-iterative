import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { DescriptionComponent } from './description/description.component';

import { RouterModule, Routes } from '@angular/router';
import { BarHomeComponent } from './bar-home/bar-home.component';
import { QuantidadeComicsComponent } from './quantidade-comics/quantidade-comics.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComicsComponent } from './list-comics/list-comics.component';
import { ShowComicsComponent } from './show-comics/show-comics.component';
import { FeedbackUsuarioComponent } from './feedback-usuario/feedback-usuario.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {
    path: 'description', component: DescriptionComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'list-comics', component: ListComicsComponent
  },
  {
    path: 'feedback-usuario', component: FeedbackUsuarioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent,
    BarHomeComponent,
    QuantidadeComicsComponent,
    ListComicsComponent,
    ShowComicsComponent,
    FeedbackUsuarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
