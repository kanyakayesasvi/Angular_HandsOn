import { Component } from '@angular/core';
import { Req } from './model/model';
import { FormBuilder, Validators } from '@angular/forms';

import { DetailsService } from './service/details.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // req:Req=new Req();
  req:any
  constructor(private detailsService:DetailsService, private fb:FormBuilder){}

  userForm=this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    address:['',Validators.required],
    userType:['',Validators.required],
    age:[Validators.required]
  });

  ngOnInit():void{
    this.req=this.detailsService.getdetails();
    this.userForm.setValue({
      firstname:this.req.firstname,
      lastname:this.req.lastname,
      address:this.req.address,
      age:this.req.age,
      userType:this.req.userType

    }

    )
  }


  senddata(){
    console.log(this.userForm.getRawValue());

 }
}



  // updateName(){
  //   this.userForm.getRawValue();
  // }


   //
// //   title = 'content';
//       constructor(private detailsService:DetailsService){}
//       ngOnInit(){

// }

