import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Personnage } from '../model/Personnage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  personnageStream = new BehaviorSubject<Personnage[]>([]);

  constructor(private http: HttpClient){}

  getPersonnage = ():void =>{
this.http.get<Personnage[]>(environment.URL).subscribe(data =>{
  this.personnageStream.next(data)
})
  }

  deletePersonnage = (id: number):Observable<Personnage[]> =>{
    return this.http.delete<Personnage[]>(`${environment.URL}/${id}`)
  }

  addPersonnage = (data: Personnage): Observable<Personnage> =>{
    return this.http.post<Personnage>(environment.URL, data)
   
  }

  changePersonnage = (data: Personnage): Observable<Personnage>=>{
    return this.http.patch<Personnage>(`${environment.URL}/${data.id}`,data)
  }
}

