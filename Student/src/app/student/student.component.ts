import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private studentServices:StudentsService){}

  students=this.studentServices.getStudents();
  studList:any=[] ;
  selectedStudent={id:0,name:"",gender:"",Class:0,rank:0};

  studentCLick(student:any){
    this.selectedStudent=Object.assign({},student);
    
    
   }
  getAsec(){
    this.studList=this.studentServices.sortAsc();
   }


   getDesc(){
    this.studList=this.studentServices.sortDesc();
   }

  

}
