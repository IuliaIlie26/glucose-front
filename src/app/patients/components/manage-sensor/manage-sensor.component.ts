import { Component, OnInit } from '@angular/core';
import { PatientSensorDistributionDto } from '../../model/PatientSensorDistributionDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manage-sensor',
  templateUrl: './manage-sensor.component.html',
  styleUrls: ['./manage-sensor.component.scss']
})
export class ManageSensorComponent implements OnInit {


  constructor(private patientApi: PatientApiService, private toastr: ToastrService, private translateService: TranslateService) { }

  errorMessage = '';
  distributionList: PatientSensorDistributionDto[] = [];

  newDistribution: PatientSensorDistributionDto = new PatientSensorDistributionDto();

  statuses = [{
    label: 'Active'
  }, {
    label: 'Inactive'
  }, {
    label: 'Deactivated'
  }]

  filter = { name: '', lastName: '', cnp: '' };

  sensorId
  ngOnInit() {
    this.getAllPatientDistributionList();
  }

  private getAllPatientDistributionList() {
    this.patientApi.getSensorDistribution().subscribe(resultList => this.distributionList = resultList);
  }

  getButtonLabel(status) {
    let label;
    status === 'Active' ? label = 'Deactivate' : label = 'Activate';
    return label;
  }

  onStatusChange(id) {
    console.log('schimba')
  }


  assign() {

    this.patientApi.assignSensor(this.newDistribution).subscribe(dto => {
      if (!dto.message) {
        this.errorMessage = '';
        this.getAllPatientDistributionList();
        let successMessage = this.translateService.instant('patient.manage.sensor.assign.success');
        this.toastr.success(successMessage);
      }
      else {
        this.errorMessage = this.translateService.instant(dto.message);
      }
      this.newDistribution.sensorId = '';
      this.newDistribution.patientCnp = '';
    })
  }
}
