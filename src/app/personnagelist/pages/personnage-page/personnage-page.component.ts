import { Component, OnInit } from '@angular/core';
import { Personnage } from '../../model/Personnage';
import { PersonnageService } from '../../service/personnage.service';




@Component({
  selector: '<app-personnage-page>',
  templateUrl: './personnage-page.component.html',
  styleUrls: ['./personnage-page.component.css']
})
export class PersonnagePageComponent implements OnInit {
  personnages: Array<Personnage>=[];
  

  constructor(private personnageService: PersonnageService) { }

  //Affichage des personnages 

  ngOnInit(): void {
    this.personnageService.getPersonnage();
   
  }

  ngOnDestroy(): void {
    
  }

  getPersonnages = ():void => {
    this.personnageService.personnageStream.subscribe(
      data => {
        this.personnages = data
    },
    err=> console.log(err))
  }
// Nouveau Personnage

   addPersonnage = (personnage: string): void => {
     
   }



  //Delete un personnage
  delete =(data: number): void => {
    this.personnageService.deletePersonnage(data).subscribe(data=>{
      this.getPersonnages()
    },
    err =>console.error(err))
  }

  //layout pour créer un nouveau personnage
  
  update = (personnage: Personnage): void => {
this.personnageService.changePersonnage(personnage).subscribe(data=>{
  this.getPersonnages()
})
  }



 

}
