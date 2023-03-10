import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IntegrationService } from '../integration.service';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent {
  Sd: any;
  constructor(private Service:IntegrationService,private router:Router){
    this.Studentdetails();
  }

  Studentdetails(){
    this.Service.getStudent().subscribe(
      (resp)=>{
        console.log(resp);
        this.Sd=resp;

      },
      (err)=>{
        console.log(err);
      }
    );
  }

  back(){
    this.router.navigate(['/']);
  }

}
