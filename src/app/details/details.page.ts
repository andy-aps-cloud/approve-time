import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../service/app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  employee: any;
  employeeTimeSheet: any = [];

  constructor(private route: ActivatedRoute,
    private appService: AppService,
    private nav: NavController) { }

  async ngOnInit() {
    let id = this.route.snapshot.params['employeeId'];

    this.employee = await this.appService.getEmployeeById(id);
    console.log(this.employee);

    this.employeeTimeSheet = await this.appService.getTimeSheetByEmployeeById(id);
    console.log(this.employeeTimeSheet);

  }

  goToDayDetails(timeSheet: any) {

    this.appService.setTimeSheet(timeSheet);
    this.nav.navigateForward(`/day-details/${this.employee.employeeId}`);
  }

  updateTimeSheet(timeSheet){
    console.log(timeSheet);
    this.appService.updateTimeSheet(this.employeeTimeSheet);

  }
}
