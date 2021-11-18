import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnagePageComponent } from './pages/personnage-page/personnage-page.component';
import { DisplayPersonnageComponent } from './components/display-personnage/display-personnage.component';
import { AddPersonnageComponent } from './layouts/add-personnage/add-personnage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonnagePageComponent,
    DisplayPersonnageComponent,
    AddPersonnageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    PersonnagePageComponent
  ]
})
export class PersonnagelistModule { }
