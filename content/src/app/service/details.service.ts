import { Injectable } from '@angular/core';
import { Req } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  getdetails(){
    return{
    firstname:"yesasvi",
    lastname:"Teluguntla",
    address:"11-15-19,vinnakaotavri street",
    age:21,
    userType:"student"
  }
}
   logData(data:Req)
   {
    console.log(data)
   }

}
