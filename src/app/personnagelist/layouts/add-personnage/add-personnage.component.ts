import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-personnage',
  templateUrl: './add-personnage.component.html',
  styleUrls: ['./add-personnage.component.css']
})
export class AddPersonnageComponent implements OnInit {

  @Output() newPersonnage: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addPersonnage = (data:string): void =>{
    this.newPersonnage.emit(data);
  }

}
