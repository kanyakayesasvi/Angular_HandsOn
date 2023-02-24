import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  name:String='';

  constructor(private studentService:StudentService){}

  ngOnInit(): void {

    this.studentService.cd$.subscribe((data:any) => {
      this.name = data;
    })


  }

  
}
