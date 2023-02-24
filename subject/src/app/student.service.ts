import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  private CD=new Subject<any>();
  cd$=this.CD.asObservable();

  public SD(data:any){
    this.CD.next(data)
  }
}
