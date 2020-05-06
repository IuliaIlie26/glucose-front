import { Component, OnInit, OnDestroy } from '@angular/core';
import { PatientSensorDistributionDto } from '../../model/PatientSensorDistributionDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { statuses } from '../../../shared/models/senors-status.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-sensor',
  templateUrl: './manage-sensor.component.html',
  styleUrls: ['./manage-sensor.component.scss']
})
export class ManageSensorComponent implements OnInit, OnDestroy {


  constructor(private patientApi: PatientApiService, private toastr: ToastrService, private translateService: TranslateService) { }

  errorMessage = '';
  distributionList: PatientSensorDistributionDto[] = [];
  translateSubscription: Subscription;
  collapsed = true;
  newDistribution: PatientSensorDistributionDto = new PatientSensorDistributionDto();

  statuses: any[];

  ngOnInit() {
    this.getAllPatientDistributionList();
    this.translateStatus(this.translateService.defaultLang);
    this.translateSubscription = this.translateService.onLangChange.subscribe(event => this.translateStatus(event.lang))
  }

  translateStatus(lang) {
    this.statuses = statuses[lang]
  }

  onDateSelect(event){

  }

  private getAllPatientDistributionList() {
    this.patientApi.getSensorDistribution().subscribe(resultList => this.distributionList = resultList);
  }

  assign() {

    this.patientApi.assignSensor(this.newDistribution).subscribe(dto => {
      if (!dto.message) {
        this.errorMessage = '';
        this.getAllPatientDistributionList();
        let successMessage = this.translateService.instant('patient.manage.sensor.assign.success');
        this.toastr.success(successMessage);
        this.collapsed = true;
      }
      else {
        this.errorMessage = this.translateService.instant(dto.message);
      }
      this.newDistribution.sensorId = '';
      this.newDistribution.patientCnp = '';
    })
  }

  ngOnDestroy() {
    if (this.translateSubscription) this.translateSubscription.unsubscribe();
  }
}
