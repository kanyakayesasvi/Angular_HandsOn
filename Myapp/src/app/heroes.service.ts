import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }
  getHeroes(){
    return[
      {id:1,name:'yesasvi'},
      {id:2,name:'yeshu'},
      {id:3,name:'TNBK'},
      {id:4,name:'kanyaka'}
    ]

  }
}
