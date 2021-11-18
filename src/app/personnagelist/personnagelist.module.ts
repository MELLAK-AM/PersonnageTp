import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnagePageComponent } from './pages/personnage-page/personnage-page.component';



@NgModule({
  declarations: [
    PersonnagePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonnagePageComponent
  ]
})
export class PersonnagelistModule { }
