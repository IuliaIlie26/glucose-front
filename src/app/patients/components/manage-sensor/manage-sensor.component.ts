import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorDistributionDto } from '../../model/SensorDistributionDto';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { statuses } from '../../../shared/models/senors-status.model'
import { Subscription } from 'rxjs';
import { SensorDistributionApiService } from 'src/app/api/sensor-distribution-api.service';

@Component({
  selector: 'app-manage-sensor',
  templateUrl: './manage-sensor.component.html',
  styleUrls: ['./manage-sensor.component.scss']
})
export class ManageSensorComponent implements OnInit, OnDestroy {


  constructor(private sensorDistributionApi: SensorDistributionApiService, private toastr: ToastrService, private translateService: TranslateService) { }
  
  errorMessage = '';
  distributionList: SensorDistributionDto[] = [];
  translateSubscription: Subscription;
  collapsed = true;
  newDistribution: SensorDistributionDto = new SensorDistributionDto();

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
    this.sensorDistributionApi.getSensorDistribution().subscribe(resultList => this.distributionList = resultList);
  }

  assign() {

    this.sensorDistributionApi.assignSensor(this.newDistribution).subscribe(dto => {
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
