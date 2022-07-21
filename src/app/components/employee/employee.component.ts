import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/Employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public employeeServices: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeServices.getEmployees().subscribe(res => this.employeeServices.employees = res, err => console.log(err));

  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeServices.updateEmployee(form.value).subscribe(res => console.log(res), err => console.log(err));
    } else {
      this.employeeServices.createEmployee(form.value).subscribe(res => { this.getEmployees(); form.reset() }, err => console.log(err));

    }
  }

  deleteEmployee(id: any) {
    const res = confirm('Are you sure?');
    if (res) {
      this.employeeServices.deleteEmployee(id).subscribe(res => this.getEmployees(), err => console.log(err));
    }
  }

  editEmployee(employee: Employee) {
    this.employeeServices.selectedEmployee = employee;
  }

  resetForm(form: NgForm) {
    form.reset()
  }

}
