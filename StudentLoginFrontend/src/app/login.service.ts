import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  Api='http://localhost:8080';


  public registerLogin(loginData: any) {
    return this.http.post(this.Api + '/Register', loginData);
  }
  public  getLogin() {
    return this.http.get(this.Api + '/loginlist');
  }

  loginValidation(username:any,password:any){
    //console.log(this.Api +'/user/{username}'+username+'/{password}'+password);
    console.log(this.Api +'/user/'+username+'/'+password);
    return this.http.get(this.Api +'/user/'+username+'/'+password);

  }

}
