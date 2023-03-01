import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  API='http://localhost:8080';

  public registerdetails(registerdetails:any){
    return this.http.post(this.API +'/register',registerdetails );
  }

  public getregisterdetails(){
    return this.http.get(this.API+'/totalDetails');
  }
}
