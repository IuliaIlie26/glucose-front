import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiskFactorsDto } from 'src/app/shared/models/PatientRiskFactorsDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { racialOrigin } from './races-origin.model';
import { conceptionMethods } from './conception-methods.model'
import { familyHistoryOfDiabetes } from './family-history.model'
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng/primeng';
import { MedicalChartApiService } from 'src/app/api/medical-chart-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-risk-factors',
  templateUrl: './risk-factors.component.html',
  styleUrls: ['./risk-factors.component.scss']
})
export class RiskFactorsComponent implements OnInit, OnDestroy {

  constructor(private patientApi: PatientApiService,private _location: Location, private medicalChartApi: MedicalChartApiService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, public translateService: TranslateService, private router: Router) { }

  riskFactors: RiskFactorsDto;
  patientId: string; 
  age: string;
  races: Array<any> = [];
  conceptions: Array<any> = [];
  familyHistory: Array<any> = [];
  languageSubscription: Subscription;
  role;

  selectedConceptionMethod: SelectItem;
  selectedRacialOrigin: SelectItem;
  selectedFamilyHistory: SelectItem;

  ngOnInit() {
    this.role= sessionStorage.getItem('role')
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getFullFormatAgeById(+this.patientId).subscribe(age => this.age = age);
    this.medicalChartApi.getRiskFactors(+this.patientId).subscribe(risk => {
      this.riskFactors = risk;
      if (this.riskFactors.conceptionMethod) {
        this.selectedConceptionMethod = { 'label': this.riskFactors.conceptionMethod, 'value': this.riskFactors.conceptionMethod }
      }
      if (this.riskFactors.familyHistoryOfDiabetes) {
        this.selectedFamilyHistory = { 'label': this.riskFactors.familyHistoryOfDiabetes, 'value': this.riskFactors.familyHistoryOfDiabetes }
      }
      if (this.riskFactors.racialOrigin) {
        this.selectedRacialOrigin = { 'label': this.riskFactors.racialOrigin, 'value': this.riskFactors.racialOrigin }
      }

    })
    this.setDropdownValues(this.translateService.defaultLang);
    this.translateOnLangChange();
  }

  translateOnLangChange() {
    this.languageSubscription = this.translateService.onLangChange.subscribe(
      (event) =>
        this.setDropdownValues(event.lang)
    );
  }

  private setDropdownValues(lang: any) {
    this.races = racialOrigin[lang];
    this.conceptions = conceptionMethods[lang];
    this.familyHistory = familyHistoryOfDiabetes[lang];
  }

  saveRiskFactors() {

    if (this.validated()) {
      this.riskFactors.racialOrigin = this.selectedRacialOrigin.value;
      this.riskFactors.conceptionMethod = this.selectedConceptionMethod.value;
      this.riskFactors.familyHistoryOfDiabetes = this.selectedFamilyHistory.value;
      this.riskFactors.patientId = +this.patientId;
      this.medicalChartApi.saveRiskFactors(this.riskFactors).subscribe(() => this.toastr.success('Success!'))
    }
  }

  validated() {
    if (!(this.selectedFamilyHistory && this.riskFactors.height && this.riskFactors.weight &&
      this.selectedConceptionMethod && this.selectedRacialOrigin)) {
      this.toastr.error(this.translateService.instant("error.fields.required"))
      return false;
    }

    if (isNaN(this.riskFactors.height)) {
      this.toastr.error(this.translateService.instant("error.height.nan"));
      return false;
    }

    if (isNaN(this.riskFactors.weight)) {
      this.toastr.error(this.translateService.instant("error.weight.nan"));
      return false;
    }

    return true;
  }

  back() {
    this._location.back();
  }

  ngOnDestroy() {
    if (this.languageSubscription) this.languageSubscription.unsubscribe();
  }
}