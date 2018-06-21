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


const appRoutes: Routes = [
  { 
    path: 'description', component: DescriptionComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent,
    BarHomeComponent,
    QuantidadeComicsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
