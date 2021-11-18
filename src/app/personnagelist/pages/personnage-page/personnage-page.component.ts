import { Component, OnInit } from '@angular/core';
import { Personnage } from '../../model/Personnage';

@Component({
  selector: '<app-personnage-page>',
  templateUrl: './personnage-page.component.html',
  styleUrls: ['./personnage-page.component.css']
})
export class PersonnagePageComponent implements OnInit {
  personnages: Array<Personnage> = [{title: "perso1", id:1, key:"ysy", name:"toto", active: false}, {title: "perso2", id:2, key:"ysyz", name:"titi", active: false}]

  constructor() { }

  ngOnInit(): void {
  }

}
