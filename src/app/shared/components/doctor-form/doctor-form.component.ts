import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { DoctorDto } from '../../models/DoctorDto';
import { SelectItem } from 'primeng';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { medicalSpeciality } from '../../models/medical-speciality'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit, OnDestroy {

  @Input() doctor: DoctorDto;
  @Output() onSave = new EventEmitter<DoctorDto>();
  selectedSpeciality: SelectItem;
  specialities: Array<any>
  constructor(private toastr: ToastrService, private translateService: TranslateService) { }
  langSubscription: Subscription;

  ngOnInit() {
    if (this.doctor.speciality) {
      this.selectedSpeciality = { 'label': this.doctor.speciality, 'value': this.doctor.speciality };
    }
    this.translateMedicalSpeciality(this.translateService.defaultLang);
    this.langSubscription = this.translateService.onLangChange.subscribe(event => this.translateMedicalSpeciality(event.lang))
  }

  private translateMedicalSpeciality(lang) {
    this.specialities = medicalSpeciality[lang];
  }

  isValid() {
    return (this.doctor.name && this.doctor.lastname && this.selectedSpeciality && this.doctor.email && this.doctor.phone)
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.doctor.speciality) {
      this.selectedSpeciality = { 'label': this.doctor.speciality, 'value': this.doctor.speciality };
    }
  }

  emitDoctorInformation() {
    if (this.isValid()) {
      this.doctor.speciality = this.selectedSpeciality.label;
      this.onSave.emit(this.doctor);
      this.doctor = new DoctorDto();
      this.selectedSpeciality = { 'label': '', 'value': null }
    } else {
      this.toastr.error(this.translateService.instant("error.fields.required"))
    }
  }

  ngOnDestroy() {
    if (this.langSubscription) this.langSubscription.unsubscribe();
  }
}
