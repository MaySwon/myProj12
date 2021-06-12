import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PagesCardComponent } from './pages-card/pages-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    PagesCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
