import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Registration } from './model';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registration:Registration=new Registration();
  submitted=false;


   constructor(private registrationService:RegistrationService,private fb:FormBuilder){

  }
    userForm=this.fb.group({
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    middle_name:[],
    email:['',[Validators.required,Validators.email]],
    gender:['',Validators.required],
    phoneNumber:['',Validators.required],
    birthday:['',Validators.required],
    address:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(8)]]
});



senddata(){
  console.log(this.userForm.getRawValue());
  this.registrationService.registerdetails(this.userForm.getRawValue()).subscribe(
    (resp)=>{
      console.log(resp);
    }
  )
}


 onReset() {
  this.submitted = false;
  this.userForm.reset();
}

}
