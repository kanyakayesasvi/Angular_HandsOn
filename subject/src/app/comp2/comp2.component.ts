import { Component } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  constructor(private studentService:StudentService){}
  
  ngOnInit(): void {
    
  }

  passData(){
    this.studentService.SD('TNBKYESASVI');
  }


}
