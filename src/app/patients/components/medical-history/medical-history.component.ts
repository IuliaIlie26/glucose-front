import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiskFactors } from 'src/app/commons/models/RiskFactors';
import { PatientRiskFactorsDto } from 'src/app/commons/models/PatientRiskFactorsDto';
import { PatientApiService } from 'src/app/api/patient-api.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  constructor(private patientApi: PatientApiService, private activatedRoute: ActivatedRoute) { }

  patientRiskFactors = new PatientRiskFactorsDto();
  patientId: string;
  age: string;

  risks: RiskFactors[] = [
    { name: 'Smoker', selected: false },
    { name: 'Previous macrosomic baby', selected: false },
    { name: 'Previous GDM', selected: false }
  ]

  races = [
    { label: 'African/Black' },
    { label: 'African Caribbean' },
    { label: 'Caucasian/White' },
    { label: 'East Asian' },
    { label: 'Middle Eastern' },
    { label: 'Mixed' },
    { label: 'South Asian' }
  ]

  conceptions = [
    { label: 'Spontaneus' },
    { label: 'Ovulation drugs' },
    { label: 'In vitro fertilization' }
  ]

  familyHistory = [
    { label: 'None' },
    { label: '1st degree' },
    { label: '2nd degree' },
    { label: '3rd degree' }
  ]

  ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getFullFormatAgeById(+this.patientId).subscribe(age => this.age = age);
  }

  save() {

  }

}