import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private employees: any = [];
  private timeSheets = [];
  private timeSheet: any;

  constructor() { }

  async getEmployees() {

    const response = await fetch("https://api.myjson.com/bins/1bbudh");
    let r = await response.json();
    this.employees = r;
    return this.employees;
  }

  async getTimeSheets() {

    const response = await fetch("https://api.myjson.com/bins/11t269");
    let r = await response.json();
    this.timeSheets = r;
    return this.timeSheets;
  }

  getEmployeeById(id: string) {

    let e = this.employees.find(e => e.employeeId == id);
    return e;
  }

  async getTimeSheetByEmployeeById(id: string) {

    await this.getTimeSheets();
    let timeSheets = await this.timeSheets.filter(t => t.employeeId == id);
    return timeSheets;

  }

  setTimeSheet(timeSheet) {
    this.timeSheet = timeSheet;
  }

  getTimeSheet() {
    return this.timeSheet;
  }


  async updateTimeSheet(employeeTimeSheets) {

    this.timeSheets = await _.remove(this.timeSheets, ts => {
      return ts.employeeId != employeeTimeSheets[0].employeeId
    })

    this.timeSheets = this.timeSheets.concat(employeeTimeSheets);


    fetch('https://api.myjson.com/bins/11t269', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.timeSheets)
    })
      .then(response => {
        response.json();
        this.getTimeSheets();
      })
      .then(data => console.log('data is', data))
      .catch(error => console.log('error is', error));

  }

  resetTimeSheets(employeeTimeSheets) {

    fetch('https://api.myjson.com/bins/11t269', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeTimeSheets)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        console.log('data is', data);
      }
        
      )
      .catch(error => console.log('error is', error));
  }

  resetEmployees(employees) {

    fetch('https://api.myjson.com/bins/1bbudh', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employees)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        console.log('data is', data);
      }
        
      )
      .catch(error => console.log('error is', error));
  }

}
