import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../service/app.service';
import { NavController, ToastController } from '@ionic/angular';
import { Network } from '@ngx-pwa/offline';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  employee: any;
  employeeTimeSheet: any = [];
  //network:Network;

  //online$ = this.network.onlineChanges;

  constructor(private route: ActivatedRoute,
    private appService: AppService,
    private nav: NavController,
    public network: Network,
    private storage: Storage,
    private toastController: ToastController
  ) {
    //this.network = network;
  }

  async ngOnInit() {


    this.network.onlineChanges.subscribe(() => {
      console.log("Network status changed: " + this.network.online);
      this.handleNetWorkChanged();
    })
  }

  async ionViewDidEnter() {
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

    if (this.network.online) {

      this.appService.updateTimeSheet(this.employeeTimeSheet);
    }
    else {
      this.storage.set("sync", this.employeeTimeSheet);
    }
  }

  async handleNetWorkChanged() {

    if (this.network.online) {
      let ts = await this.storage.get("sync");
      if (ts) {
        this.showToastMessage("Syncing data to server...")
        this.appService.updateTimeSheet(this.employeeTimeSheet).then(() => {
          this.storage.clear();
        });
      }
    }
  }

  async showToastMessage(msg: string) {
    console.log(msg);
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
