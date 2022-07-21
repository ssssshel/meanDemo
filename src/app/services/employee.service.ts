import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API: string = 'http://localhost:3000/api/employees'
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0,
  }
  employees!: Employee[]

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API)
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee)
  }

  deleteEmployee(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.URL_API}/${employee._id}`, employee)
  }

}
