import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl: string = "http://localhost:3000/";
  
  constructor(private httpClient: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'employee', data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + `employee/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'employee');
  }

  deleteEmployee(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + `employee/${id}`);
  }
}