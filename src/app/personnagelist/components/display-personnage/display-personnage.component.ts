import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personnage } from '../../model/Personnage';

@Component({
  selector: 'app-display-personnage',
  templateUrl: './display-personnage.component.html',
  styleUrls: ['./display-personnage.component.css']
})
export class DisplayPersonnageComponent implements OnInit {

  @Input() data: Personnage[] = [];
  @Output() deletePersonnage: EventEmitter<number> = new EventEmitter<number>();
  @Output() updatePersonnage: EventEmitter<Personnage> = new EventEmitter<Personnage>();
  titre: string ="LEAGUE OF LEGENDS"
  constructor() { }

  ngOnInit(): void {
  }


  delete = (data: number) => {
  this.deletePersonnage.emit(data);
  }

  changePersonnage =(personnage: Personnage) => {
    personnage.active == false ? personnage.active = true : personnage.active = false;
    this.updatePersonnage.emit(personnage)
  }
}
