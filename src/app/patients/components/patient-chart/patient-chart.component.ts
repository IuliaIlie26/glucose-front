import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { TranslateService } from '@ngx-translate/core';
import { RiskFactorsDto } from 'src/app/shared/models/PatientRiskFactorsDto';
import { PregnancyInfoDto } from 'src/app/shared/models/PregnancyInfoDto';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { RiskScoreDto } from 'src/app/shared/models/RiskScoreDto';
import { SensorDistributionDto } from '../../model/SensorDistributionDto';
import { MedicalChartApiService } from 'src/app/api/medical-chart-api.service';
import { SensorDistributionApiService } from 'src/app/api/sensor-distribution-api.service';
import { ConsultationDto } from 'src/app/shared/models/ConsultationDto';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.scss']
})
export class PatientChartComponent implements OnInit {

  constructor(private toastr: ToastrService, private medicalChartApi: MedicalChartApiService, private sensorDistributionApi: SensorDistributionApiService,
    private activatedRoute: ActivatedRoute, private router: Router, private patientApi: PatientApiService, public translateService: TranslateService, private consultationApi: ConsultationsApiService) { }
  editMode = false;
  patientId: string;
  selectedPatient: PatientDto;
  age = '';
  riskFactors: RiskFactorsDto;
  today = new Date();
  maxDate = new Date();
  score = 0;
  week = '';
  pregnancyInfo = new PregnancyInfoDto();
  selectedDueDate: Date;
  isPregnant = '';
  bmi = '';
  pipe = new DatePipe('en-us');
  riskScore: RiskScoreDto;
  sensorInfo: SensorDistributionDto;
  consultationList: ConsultationDto[];

  ngOnInit() {
    this.maxDate.setMonth(this.today.getMonth() + 10);

    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getPatientById(+this.patientId).subscribe(patient => this.selectedPatient = patient);
    this.patientApi.getFullFormatAgeById(+this.patientId).subscribe(age => this.age = age)
    this.medicalChartApi.getRiskFactors(+this.patientId).subscribe(risks => {
      this.riskFactors = risks
      let bmi = (this.riskFactors.weight / Math.pow((this.riskFactors.height / 100), 2)).toFixed(2);
      if (!isNaN(+bmi)) {
        this.bmi = bmi
      }
    })
    this.medicalChartApi.calculateRiskScore(+this.patientId).subscribe(scores => this.riskScore = scores)
    this.medicalChartApi.getPregancyInfo(+this.patientId).subscribe(info => this.setPregnancyInfoForm(info));
    this.sensorDistributionApi.getSensorStatus(+this.patientId).subscribe(sensorInfo => this.sensorInfo = sensorInfo)
    this.consultationApi.getPatientConsultations(+this.patientId).subscribe(list => this.consultationList = list)
  }

  private setPregnancyInfoForm(info: PregnancyInfoDto) {
    this.pregnancyInfo = info;
    const dueDate = this.pregnancyInfo.dueDate;
    if (dueDate) {
      this.selectedDueDate = new Date(dueDate);
      if (this.selectedDueDate > this.today) {
        this.translateService.get("buttons.yes").subscribe(res => this.isPregnant = res)
        this.calculatePregancyWeek();
      }
      else {
        this.translateService.get("buttons.no").subscribe(res => this.isPregnant = res);
      }
    }
    else {
      this.translateService.get("buttons.no").subscribe(res => this.isPregnant = res);
    }
  }

  private calculatePregancyWeek() {
    let today = new Date();
    let diff = new Date(this.pregnancyInfo.dueDate).getTime() - today.getTime();
    let nr = 40 - Math.round(diff / (7 * 24 * 60 * 60 * 1000));
    if (!isNaN(nr)) {
      this.week = nr + '';
    }
  }

  activate() {
    this.sensorInfo.doctorUsername = sessionStorage.getItem('loggedUsername')
    this.sensorDistributionApi.activateSensor(this.sensorInfo).subscribe(sensorInfo => {
      this.sensorInfo = sensorInfo;
      this.toastr.success(this.translateService.instant("buttons.success"))
    });
  }

  deactivate() {
    this.sensorInfo.doctorUsername = sessionStorage.getItem('loggedUsername')
    this.sensorDistributionApi.deactivateSensor(this.sensorInfo).subscribe(sensorInfo => {
      this.sensorInfo = sensorInfo;
      this.toastr.success(this.translateService.instant("buttons.success"))
    });
  }

  viewNotes(consultationId: string) {
    this.router.navigate(['consultation', 'consultation-notes', consultationId])
  }

  viewCharts() {
    this.router.navigate(['patient', 'glucose-charts', this.patientId])
  }

  openRiskFactorsChart() {
    this.router.navigate(['patient', 'risk-factors', this.selectedPatient.id])
  }

  savePregnancyInfo() {
    this.translateService.get("buttons.yes").subscribe(res => this.isPregnant = res)
    this.pregnancyInfo.patientId = +this.patientId;
    this.pregnancyInfo.dueDate = this.pipe.transform(this.selectedDueDate, 'yyyy-MM-dd');
    this.medicalChartApi.savePregancyInfo(this.pregnancyInfo).subscribe(() => this.toastr.success(this.translateService.instant("buttons.success")));
    this.editMode = false;
    this.calculatePregancyWeek();
  }
}
