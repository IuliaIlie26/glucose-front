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

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.scss']
})
export class PatientChartComponent implements OnInit {

  constructor(private toastr: ToastrService, private activatedRoute: ActivatedRoute, private router: Router, private patientApi: PatientApiService, public translateService: TranslateService) { }
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

  ngOnInit() {
    this.maxDate.setMonth(this.today.getMonth() + 10);

    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getPatientById(+this.patientId).subscribe(patient => this.selectedPatient = patient);
    this.patientApi.getFullFormatAgeById(+this.patientId).subscribe(age => this.age = age)
    this.patientApi.getRiskFactors(+this.patientId).subscribe(risks => {
      this.riskFactors = risks
      this.bmi = (this.riskFactors.weight / Math.pow((this.riskFactors.height / 100), 2)).toFixed(2)
    })
    this.patientApi.calculateRiskScore(+this.patientId).subscribe(scores => this.riskScore = scores)
    this.patientApi.getPregancyInfo(+this.patientId).subscribe(info => this.setPregnancyInfoForm(info))
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
    console.log(this.isPregnant, 'is preg')
  }

  private calculatePregancyWeek() {
    let today = new Date();
    let diff = new Date(this.pregnancyInfo.dueDate).getTime() - today.getTime();
    let nr = 40 - Math.round(diff / (7 * 24 * 60 * 60 * 1000));
    if (!isNaN(nr)) {
      this.week = nr + '';
    }
  }

  openChart() {
    this.router.navigate(['patient', 'risk-factors', this.selectedPatient.id])
  }

  savePregnancyInfo() {
    this.translateService.get("buttons.yes").subscribe(res => this.isPregnant = res)
    this.pregnancyInfo.patientId = +this.patientId;
    this.pregnancyInfo.dueDate = this.pipe.transform(this.selectedDueDate, 'yyyy-MM-dd');
    this.patientApi.savePregancyInfo(this.pregnancyInfo).subscribe(() => this.toastr.success(this.translateService.instant("buttons.success")));
    this.editMode = false;
    this.calculatePregancyWeek();
  }
}
