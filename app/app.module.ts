import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { ScoreComponent } from './components/score/score.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ScoreComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {} 