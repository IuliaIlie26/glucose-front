import { Component, OnInit, OnDestroy } from '@angular/core';
import { medicalSpeciality } from '../../shared/models/medical-speciality'
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ConsultationFilterDto } from 'src/app/shared/models/ConsultationFilterDto';
import { ConsultationDto } from 'src/app/shared/models/ConsultationDto';

@Component({
  selector: 'app-create-consultation',
  templateUrl: './create-consultation.component.html',
  styleUrls: ['./create-consultation.component.scss']
})
export class CreateConsultationComponent implements OnInit, OnDestroy {

  constructor(private translateService: TranslateService, private toastr: ToastrService, private consultationApi: ConsultationsApiService, private patientApi: PatientApiService) { }

  langSubscription: Subscription;
  specialitySubscription: Subscription;
  specialities: Array<any>
  patientCnp = '';
  pacientName = '';
  selectedSpeciality: SelectItem;
  today = new Date();
  rangeDates: Date[];
  pipe = new DatePipe('en-us');
  isAdmin = false;

  ngOnInit() {
    let role = sessionStorage.getItem('role')
    if (role == "ADMINISTRATOR") {
      this.isAdmin = true
    } else if (role == 'PATIENT') {
      let patientId = sessionStorage.getItem('patientId')
      this.patientApi.getPatientById(+patientId).subscribe(pat => this.patientCnp = pat.cnp)
    }
    this.translateMedicalSpeciality(this.translateService.defaultLang);
    this.langSubscription = this.translateService.onLangChange.subscribe(event => this.translateMedicalSpeciality(event.lang))
  }

  private translateMedicalSpeciality(lang) {
    this.specialities = medicalSpeciality[lang];
  }

  checkCnp() {
    this.patientApi.getPatientNameByCnp(this.patientCnp).subscribe(name => this.pacientName = name);
  }

  showTable = true;

  reserve(spot: ConsultationDto) {
    spot.patientCnp = this.patientCnp;
    this.consultationApi.reserve(spot).subscribe(() => {
      this.toastr.success(this.translateService.instant('buttons.success'));
      this.showTable = false;
    });

  }

  consultationFilter = new ConsultationFilterDto();

  spots: ConsultationDto[];

  findConsultationSpots() {

    if (!this.patientCnp || !this.selectedSpeciality || !this.rangeDates) {
      this.toastr.error(this.translateService.instant('error.fields.required'));
    } else if (this.pacientName == '' && this.isAdmin) {
      this.toastr.error(this.translateService.instant('consultations.create.checkCnp'));
    } else {
      this.consultationFilter.startDate = this.pipe.transform(this.rangeDates[0], 'yyyy-MM-dd');
      this.consultationFilter.endDate = this.pipe.transform(this.rangeDates[1], 'yyyy-MM-dd');
      this.consultationFilter.speciality = this.selectedSpeciality.label;
      this.showTable = true;
      this.consultationApi.findConsultationSpots(this.consultationFilter).subscribe(doctors => this.spots = doctors);
    }
  }

  ngOnDestroy() {
    if (this.langSubscription) this.langSubscription.unsubscribe();
  }
}
