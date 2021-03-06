import { Component } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  timesheets =
    [
      {
        "employeeId": "Z09312",
        "date": "7/22/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123455M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z09312",
        "date": "7/23/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123465M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z09312",
        "date": "7/24/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z09312",
        "date": "7/25/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123485M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z09312",
        "date": "7/26/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123495M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z10623",
        "date": "7/22/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123455M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z10623",
        "date": "7/23/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123465M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z10623",
        "date": "7/24/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z10623",
        "date": "7/25/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123485M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z10623",
        "date": "7/26/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123495M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z13956",
        "date": "7/22/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123455M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z13956",
        "date": "7/23/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123465M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z13956",
        "date": "7/24/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z13956",
        "date": "7/25/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123485M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z13956",
        "date": "7/26/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123495M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z12345",
        "date": "7/22/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123455M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z12345",
        "date": "7/23/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123465M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z12345",
        "date": "7/24/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123475M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z12345",
        "date": "7/25/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123485M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      },
      {
        "employeeId": "Z12345",
        "date": "7/26/2019",
        "tasks": [
          {
            "taskId": 1,
            "chargeType": "REG",
            "chargeNumber": "T123495M",
            "hours": 4
          },
          {
            "taskId": 2,
            "chargeType": "REG",
            "chargeNumber": "T123445M",
            "hours": 4
          }
        ],
        "approvalStatus": false
      }
    ];
  employees =
    [
      {
        "id": 1,
        "employeeId": "Z09312",
        "firstName": "Andy",
        "lastName": "Nguyen",
        "departmentId": "1315",
        "departmentName": "Enterprise Mobility",
        "jobTitle": "IT Solutions Engnr/Analyst Sr",
        "profilePicture": "data:image/gif;base64,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"
      },
      {
        "id": 2,
        "employeeId": "Z10623",
        "firstName": "Mahesh",
        "lastName": "Rai",
        "departmentId": "1315",
        "departmentName": "Enterprise Mobility",
        "jobTitle": "IT Solutions Engnr/Analyst Sr",
        "profilePicture": "data:image/gif;base64,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"
      },
      {
        "id": 3,
        "employeeId": "Z13956",
        "firstName": "Alyssa",
        "lastName": "Beerling",
        "departmentId": "1315",
        "departmentName": "Enterprise Mobility",
        "jobTitle": "Supv IT Enterprise Mobility",
        "profilePicture": "data:image/gif;base64,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"
      },
      {
        "id": 4,
        "employeeId": "Z12345",
        "firstName": "Yasamin",
        "lastName": "Moftak",
        "departmentId": "1315",
        "departmentName": "Enterprise Mobility",
        "jobTitle": "IT Enterprise Mobility Intern",
        "profilePicture": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
      }
    ];
  constructor(private appService: AppService) { }

  reset(entity: string) {
    if (entity == 'employee') {
      this.appService.resetEmployees(this.employees)
    }
    else if (entity == 'employee') {
      this.appService.resetTimeSheets(this.timesheets);
    }
  }
}
