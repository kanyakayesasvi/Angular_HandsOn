import { Component,Input,Output,EventEmitter } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  

  @Input() inputstudent:any;
  @Output() newstudent=new EventEmitter()
  
  constructor(private StudentsService:StudentsService){}
  

  senttoparent(student:any){
    this.newstudent.emit(student);
    
  }
  updateDetails(student:any){
    this.StudentsService.updaterank(student)

  }
  

}
