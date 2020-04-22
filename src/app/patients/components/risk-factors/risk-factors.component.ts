import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiskFactorsDto } from 'src/app/commons/models/PatientRiskFactorsDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { racialOrigin } from './races-origin.model';
import { conceptionMethods } from './conception-methods.model'
import { familyHistoryOfDiabetes } from './family-history.model'
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-risk-factors',
  templateUrl: './risk-factors.component.html',
  styleUrls: ['./risk-factors.component.scss']
})
export class RiskFactorsComponent implements OnInit, OnDestroy {

  constructor(private patientApi: PatientApiService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, public translateService: TranslateService) { }

  riskFactors = new RiskFactorsDto();
  patientId: string;
  age: string;
  races: Array<any> = [];
  conceptions: Array<any> = [];
  familyHistory: Array<any> = [];
  languageSubscription: Subscription;

  ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getFullFormatAgeById(+this.patientId).subscribe(age => this.age = age);
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

  selectedRacialOrigin: SelectItem;
  selectedConceptionMethod: SelectItem;
  selectedFamilyHistory: SelectItem;
  saveRiskFactors() {

    if (this.validated()) {
      this.riskFactors.racialOrigin = this.selectedRacialOrigin.value;
      this.riskFactors.conceptionMethod = this.selectedConceptionMethod.value;
      this.riskFactors.familyHistoryOfDiabetes = this.selectedFamilyHistory.value;
      this.riskFactors.patientId = +this.patientId;
      this.patientApi.saveRiskFactors(this.riskFactors).subscribe(() => this.toastr.success('Success!'))
    }
  }

  validated() {
    if (!(this.selectedFamilyHistory && this.riskFactors.height && this.riskFactors.weight &&
      this.selectedConceptionMethod && this.selectedRacialOrigin && this.riskFactors.smoker && this.riskFactors.macrosomicBaby && this.riskFactors.previousGDM)) {
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

  ngOnDestroy() {
    if (this.languageSubscription) this.languageSubscription.unsubscribe();
  }
}