import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ComponentsModule } from './components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
