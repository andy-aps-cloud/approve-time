import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.page.html',
  styleUrls: ['employees.page.scss']
})

export class EmployeesPage {
  employees = [];

  constructor(private appService: AppService, private nav: NavController) {
  }

  ngOnInit() {
    console.log("in ngOnInit");
    this.appService.getEmployees().then(
      employees => {
        this.employees = employees;
        console.log(this.employees);
      }
    )
  }

  goToDetails(employee: any) {
    this.nav.navigateForward(`/employee-details/${employee.employeeId}`);
  }

}
