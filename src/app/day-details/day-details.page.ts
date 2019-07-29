import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../service/app.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.page.html',
  styleUrls: ['./day-details.page.scss'],
})
export class DayDetailsPage implements OnInit {
  employee: any;
  timeSheet: any;

  constructor(private route: ActivatedRoute,
    private appService: AppService,
    private nav: NavController) { }

  async ngOnInit() {

    /*
    let id = this.route.snapshot.params['employeeId'];
    
    this.employee = await this.appService.getEmployeeById(id);
    console.log(this.employee);

    this.timeSheet = this.appService.getTimeSheet();
    */
  }

}
