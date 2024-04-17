// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeriesListComponent } from './series-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SeriesListComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule 
  ]
})
export class AppModule { }
