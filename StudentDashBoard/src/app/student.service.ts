import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  API = 'http://localhost:8080';

  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/RegisterStudent', studentData);
  }
  public getStudent() {
    return this.http.get(this.API + '/GetStudents');
  }
  public deleteStudents(id: any) {
    return this.http.delete(this.API + '/DeleteStudent/' + id);
  }
  public updateStudent(student:any){
    return this.http.put(this.API +' /UpdateStudent',student);
  }
}
