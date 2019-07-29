import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../service/app.service';
import { NavController } from '@ionic/angular';
import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  employee: any;
  employeeTimeSheet: any = [];
  online$ = this.network.onlineChanges;

  constructor(private route: ActivatedRoute,
    private appService: AppService,
    private nav: NavController,
    private network: Network) { }

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

  // updateTimeSheet(eventDetail, timeSheet){
  //   console.log(eventDetail);
  //   this.appService.updateTimeSheet(this.employeeTimeSheet);

  // }

  updateTimeSheet(timeSheet) {
    timeSheet.approvalStatus = !timeSheet.approvalStatus;
    console.log(timeSheet.approvalStatus);
    
    this.appService.updateTimeSheet(this.employeeTimeSheet);

  }
}
