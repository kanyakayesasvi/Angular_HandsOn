import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { API } from '../constants/api.constants'; 
import { data1 } from '../model/data';
import { mainData } from '../model/data';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API='https://datausa.io/api/data?drilldowns=Nation&measures=Population'
  constructor(private http:HttpClient) { }
  getManagerViewReport(): Observable<mainData[]> {
   
    return this.http.get<data1>(this.API).pipe(
      map((data: data1) => {
        console.log(data.data)
        return data.data;
        
      })
    );
  }
}
