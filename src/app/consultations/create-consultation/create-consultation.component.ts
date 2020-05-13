import { Component, OnInit, OnDestroy } from '@angular/core';
import { medicalSpeciality } from '../../shared/models/medical-speciality'
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ConsultationDto } from 'src/app/shared/models/ConsultationDto';
import { ConsultationSpotDto } from 'src/app/shared/models/ConsultationSpotDto';
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

  ngOnInit() {
    this.translateMedicalSpeciality(this.translateService.defaultLang);
    this.langSubscription = this.translateService.onLangChange.subscribe(event => this.translateMedicalSpeciality(event.lang))
  }

  private translateMedicalSpeciality(lang) {
    this.specialities = medicalSpeciality[lang];
  }

  checkCnp() {
    this.patientApi.getPatientNameByCnp(this.patientCnp).subscribe(name => this.pacientName = name);
  }

  reserve(spot: ConsultationSpotDto) {
    let consultation= new ConsultationDto();
    consultation.day =spot.date;
    consultation.start=spot.start
    consultation.speciality=spot.speciality
    consultation.doctorId =spot.doctorId;
    consultation.patientCnp=this.patientCnp;
    this.consultationApi

  }

  consultationFilter = new ConsultationDto();

  spots: ConsultationSpotDto[];

  findConsultationSpots() {
    if (!this.patientCnp || !this.selectedSpeciality || !this.rangeDates) {
      this.toastr.error(this.translateService.instant('error.fields.required'));
    } else {
      this.consultationFilter.start = this.pipe.transform(this.rangeDates[0], 'yyyy-MM-dd');
      this.consultationFilter.end = this.pipe.transform(this.rangeDates[1], 'yyyy-MM-dd');
      this.consultationFilter.speciality = this.selectedSpeciality.label;

      this.consultationApi.findConsultationSpots(this.consultationFilter).subscribe(doctors => this.spots = doctors);
    }
  }

  ngOnDestroy() {
    if (this.langSubscription) this.langSubscription.unsubscribe();
  }
}
