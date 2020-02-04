import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiskFactors } from 'src/app/model/RiskFactors';
import { RiskFactorsPatientDto } from 'src/app/model/RiskFactorsPatientDto';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  patient = new RiskFactorsPatientDto();
  risks: RiskFactors[] = [
    { name: 'Smoker', selected: false },
    { name: 'Previous delivery of macrosomic baby', selected: false },
    { name: 'Previous GDM', selected: false }
  ]
  patientId: string;
  races = [
    { label: 'African/Black' },
    { label: 'African Caribbran' },
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
  }

}