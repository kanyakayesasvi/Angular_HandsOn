import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model';
import { Route } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  @Input() inputStudent!:Student;
  @Output() EditStudent=new EventEmitter()
  d:Student[]=[]

  constructor( private StudentService:StudentService){}


  sendtoparent(student:any){
    this.EditStudent.emit(student);
  }

edit(student:any){
  this.StudentService.updateStudent(student)
}

}
