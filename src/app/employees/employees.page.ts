import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { NavController } from '@ionic/angular';
import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.page.html',
  styleUrls: ['employees.page.scss']
})

export class EmployeesPage {
  employees = [];
  online$ = this.network.onlineChanges;

  constructor(private appService: AppService,
    private nav: NavController,
    private network: Network) {
  }

  ngOnInit() {
    console.log("in ngOnInit");
   
  }

  ionViewDidEnter() {
    console.log("EmployeesPage");
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
