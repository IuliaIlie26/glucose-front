import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-sensor',
  templateUrl: './manage-sensor.component.html',
  styleUrls: ['./manage-sensor.component.scss']
})
export class ManageSensorComponent implements OnInit {


  constructor() { }
  distributionList = [
    {
      sensorId: '1234',
      patientName: 'Test',
      cnp: '0123456666',
      doctorName: 'test doctor',
      activationDate: '2020-12-12',
      deactivationDate: '',
      status: 'Active'
    }
  ]

  statuses = [{
    label: 'Active'
  }, {
    label: 'Inactive'
  }, {
    label: 'Deactivated'
  }]
  filter = { name: '', lastName: '', cnp: ''};
  sensorId
  ngOnInit() {
  }

  getButtonLabel(status) {
    let label;
    status === 'Active' ? label = 'Deactivate' : label = 'Activate';
    return label;
  }

  onStatusChange(id) {
    console.log('schimba')
  }

}
