import { Component, Input, OnInit } from '@angular/core';
import { Personnage } from '../../model/Personnage';

@Component({
  selector: 'app-display-personnage',
  templateUrl: './display-personnage.component.html',
  styleUrls: ['./display-personnage.component.css']
})
export class DisplayPersonnageComponent implements OnInit {

  @Input() data: Personnage[] = [];
  titre: string ="LEAGUE OF LEGENDS"
  constructor() { }

  ngOnInit(): void {
  }

}
