import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http:HttpClient) { }
  // Api='http://localhost:8080';
  public createStudent(studentData:any){
    return this.http.post( 'api/EnterStudent', studentData);

  }

  public getStudent(){
    //console.log(this.Api +'/allStudents');
    return this.http.get('api/allStudents');
  }


}
