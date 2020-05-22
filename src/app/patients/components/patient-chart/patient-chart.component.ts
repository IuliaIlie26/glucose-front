import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { TranslateService } from '@ngx-translate/core';
import { RiskFactorsDto } from 'src/app/shared/models/PatientRiskFactorsDto';

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.scss']
})
export class PatientChartComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private patientApi: PatientApiService, public translateService: TranslateService) { }
  editMode = false;
  patientId: string;
  selectedPatient: PatientDto;
  age = '';
  riskFactors: RiskFactorsDto;
  score = 0;

  ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getPatientById(+this.patientId).subscribe(patient => this.selectedPatient = patient);
    this.patientApi.getFullFormatAgeById(+this.patientId).subscribe(age => this.age = age)
    this.patientApi.getRiskFactors(+this.patientId).subscribe(risks => this.riskFactors = risks)
  }

}
