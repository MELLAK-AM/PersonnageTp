import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonnagelistModule } from './personnagelist/personnagelist.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
   PersonnagelistModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
