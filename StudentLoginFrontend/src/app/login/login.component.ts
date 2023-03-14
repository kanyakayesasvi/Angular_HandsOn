import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model:any={};
  //getData !: number;
  constructor(private loginService:LoginService,private router:Router){}

  loginUser(){
    var user=this.model.username;
    var pass=this.model.password;
    this.loginService.loginValidation(user,pass).subscribe(
      (resp)=>
      {
        var getData=resp;

        console.log(resp)
        if(getData==1){
          this.router.navigate(["/home"]);

        }
      }
    );
  }

}
