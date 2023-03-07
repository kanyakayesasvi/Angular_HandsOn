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
  public  getStudent() {
    return this.http.get(this.API + '/GetStudents');
  }
  public deleteStudents(id: any) {
    return this.http.delete(this.API + '/DeleteStudent/' + id);
  }

   public getDetailsbyId(id: any) {
    return this.http.get(this.API + '/GetStudentsById/' + id);
  }

  public updateStudent(rollnumber:number,student:any){
    console.log(this.API +'/UpdateStudent/'+ rollnumber);
    return this.http.put(this.API +'/UpdateStudent/'+ rollnumber ,student);
  }
}
