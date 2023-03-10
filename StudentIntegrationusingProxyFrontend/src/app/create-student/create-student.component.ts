import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IntegrationService } from '../integration.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent{
  constructor(private Service:IntegrationService,private router:Router){}


  register(registerForm: { value: any; }){
    this.Service.createStudent(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp)
        location.reload();
      },
      (err)=>{
        console.log(err)
      }
    );

  }

  back(){
    this.router.navigate(['/']);
  }


}
