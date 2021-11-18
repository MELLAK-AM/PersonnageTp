import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnagePageComponent } from './pages/personnage-page/personnage-page.component';
import { DisplayPersonnageComponent } from './components/display-personnage/display-personnage.component';



@NgModule({
  declarations: [
    PersonnagePageComponent,
    DisplayPersonnageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonnagePageComponent
  ]
})
export class PersonnagelistModule { }
