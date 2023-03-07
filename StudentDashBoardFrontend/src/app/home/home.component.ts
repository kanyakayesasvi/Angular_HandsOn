import { Component } from '@angular/core';
import { Student } from '../model';
import { StudentService } from '../student.service';
import { OnChanges,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  StudentDetails:any;


  StudentEditDetails =new Student();



  constructor(private Service:StudentService,private router:Router){
    this.getStudent();
  }


  register(registerForm: { value: any; }){
    this.Service.registerStudent(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp)
        location.reload();
      },
      (err)=>{
        console.log(err)
      }
    );

  }
  getStudent(){
    this.Service.getStudent().subscribe(
      (resp)=>{
        console.log(resp)
        this.StudentDetails = resp;
      },
      (err)=>{
        console.log(err)
      }
    )

  }
  deleteStudent(student: { rollnumber: any; }){

    this.Service.deleteStudents(student.rollnumber).subscribe(
      (resp)=>{
        console.log(resp);

      },
      (err)=>{
        console.log(err);
      }
      )
      location.reload();
  }


  editStudent(student:Student){
    // this.Service.updateStudent().subscribe(
    //   (resp)=>{
    //     console.log(resp)
    //   },
    //   (err)=>{
    //     console.log(err);
    //   }
    // )
    this.StudentEditDetails=student;
    this.router.navigate(['/editstudent/',student.rollnumber])
    // this.Service.updateStudent(student.rollnumber).subscribe(
    //   (resp)=>{
    //     console.log(resp)
    //   },
    //   (err)=>{
    //     console.log(err);
    //   }
    // )
    // onchange(changes:   SimpleChanges) {
    //   console.log(changes);
    // }
  }
}
