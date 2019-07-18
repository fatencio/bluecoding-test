import { EmployeeService } from '../employee.service';
import { NEmployee } from '../nemployee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: NEmployee = new NEmployee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new NEmployee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => this.gotoList(), error => console.log(error));
    this.employee = new NEmployee();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}