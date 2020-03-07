import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiskFactors } from 'src/app/commons/models/RiskFactors';
import { PatientRiskFactorsDto } from 'src/app/commons/models/PatientRiskFactorsDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-risk-factors',
  templateUrl: './risk-factors.component.html',
  styleUrls: ['./risk-factors.component.scss']
})
export class RiskFactorsComponent implements OnInit {

  constructor(private patientApi: PatientApiService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private translateService: TranslateService) { }

  patientRiskFactors = new PatientRiskFactorsDto();
  patientId: string;
  age: string;

  // to be retrieved from the db
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
    if (this.validated()) { }
  }


  validated() {
    if (!(this.patientRiskFactors.race && this.patientRiskFactors.height && this.patientRiskFactors.weight &&
      this.patientRiskFactors.conception && this.patientRiskFactors.diabetesHistory)) {
      this.toastr.error(this.translateService.instant("error.fields.required"))
      return false;
    }

    if (isNaN(this.patientRiskFactors.height)) {
      this.toastr.error(this.translateService.instant("error.height.nan"));
      return false;
    }

    if (isNaN(this.patientRiskFactors.weight)) {
      this.toastr.error(this.translateService.instant("error.weight.nan"));
      return false;
    }

    return true;
  }
}