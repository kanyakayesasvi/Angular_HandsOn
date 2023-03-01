import { Component } from '@angular/core';
import { Student } from './model';
import { StudentService } from './student.service';
import { OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentDashBoard';
  StudentDetails:any;
  StudentEditDetails =new Student();



  constructor(private Service:StudentService){
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
    this.Service.updateStudent(student).subscribe(
      (resp)=>{
        console.log(resp)
      },
      (err)=>{
        console.log(err);
      }
    )
    this.StudentEditDetails=student;

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


