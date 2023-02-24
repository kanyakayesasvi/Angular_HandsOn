import { Injectable } from '@angular/core';
import { Student } from './Student';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  studList:Student[] =[];

  getStudents(){
    
    this.studList=[
      {id:1,name:"yesasvi",gender:"Female",Class:11,rank:1},
      {id:2,name:"geeta",gender:"Female",Class:12,rank:2},
      {id:3,name:"Sreeya",gender:"Female",Class:11,rank:3},
      {id:4,name:"Mohan",gender:"male",Class:12,rank:4},
    ];
    return this.studList;
  }
  updaterank(student:any)
  {
    let newInd=student.rank-1;
    let oldInd=0;
    let old=0;
    for(let i=0;i<this.studList.length;i++){
      if(student.id==this.studList[i].id){
        oldInd=i;
      }
    }
    old=oldInd;
    let adder=0;
    if(newInd<oldInd){
      adder=1;
    }else{
      adder=-1;
      oldInd=newInd
      newInd=old
    }
    for(let i=newInd;i<oldInd;i++){
      this.studList[i].rank+=adder;
    }
    this.studList[old]=student;
    if(adder==-1){
      this.studList[oldInd].rank+=adder;
    }
    this.sortAsc();
  }



  sortAsc(){
      this.studList.sort((a, b) => {
        return a.rank - b.rank;
      });
      console.log(this.studList)
    }




  sortDesc(){
      this.studList.sort((a, b) => {
        return  b.rank - a.rank;
      });
    }
  }