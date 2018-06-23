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
import { AppRoutingModule } from './/app-routing.module';

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
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
