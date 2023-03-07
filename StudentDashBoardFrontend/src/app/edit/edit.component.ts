import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model';
import { ActivatedRoute,  Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  //@Input() inputStudent!:Student;
  @Input() inputStudent!:Student;
  @Output() EditStudent=new EventEmitter()

  //d:Student[]=[]



  sendtoparent(student:any){
    this.EditStudent.emit(student);
  }
  constructor( private StudentService:StudentService,private activatedRoute: ActivatedRoute,private router:Router){}
  rollnumber!:number
  student:Student=new Student();


  ngOnInit():void{
    this.StudentService.getDetailsbyId(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      data=>{
      this.student=data;
      console.log(data);

    },
    error=>console.log(error));

  }


// edit(student:any){
//   //this.StudentService.updateStudent(student)

// }

onSubmit(){
  this.StudentService.updateStudent(this.student.rollnumber!,this.student).subscribe(
    (resp)=>{
      //this.gotoMainPage();
      this.router.navigate(['/']);
    },
    (err)=>{
      console.log(err)
    }
  );}

// gotoMainPage(){
//     this.router.navigate(['/home',this.onSubmit]);
//  }

}








