import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { medicalSpeciality } from '../../shared/models/medical-speciality'
import { Subscription } from 'rxjs';
import { ConsultationDto } from 'src/app/shared/models/ConsultationDto';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
@Component({
  selector: 'app-manage-consultations',
  templateUrl: './manage-consultations.component.html',
  styleUrls: ['./manage-consultations.component.scss']
})
export class ManageConsultationsComponent implements OnInit, OnDestroy {

  constructor(private translateService: TranslateService, private toastr: ToastrService, private consultationApi: ConsultationsApiService) { }

  langSubscription: Subscription;
  specialities: Array<any>;
  consultationList: ConsultationDto[];

  ngOnInit() {
    this.getAllConsultations();
    this.translateMedicalSpeciality(this.translateService.defaultLang);
    this.langSubscription = this.translateService.onLangChange.subscribe(event => this.translateMedicalSpeciality(event.lang))
  }

  private translateMedicalSpeciality(lang) {
    this.specialities = medicalSpeciality[lang];
  }

  getAllConsultations() {
    this.consultationApi.getAllConsultations().subscribe(list => this.consultationList = list)
  }

  delete(consultation) {
    this.consultationApi.delete(consultation).subscribe(() => {
      this.toastr.success(this.translateService.instant("buttons.success"));
      this.getAllConsultations();
    })
  }

  ngOnDestroy() {
    if (this.langSubscription) this.langSubscription.unsubscribe();
  }
}
