import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import {Iemployee} from '../assets/emp'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  public emp='./assets/emp.json'

  constructor(private http:HttpClient) { 
   
  }

  venkat(){
    return [{id:1,name:"venkat",area:"hyd"},{id:2,name:"shiva",area:"mumbai"},{id:3,name:"prasanna",area:"kolkatta"}]
  }
  venkat1():Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this.emp);
  }
}
