import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorDto } from 'src/app/shared/models/DoctorDto';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { medicalSpeciality } from '../../shared/models/medical-speciality'
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit, OnDestroy {


  doctorList: DoctorDto[];
  specialities = [];
  collapsed = true;
  newDoctor = new DoctorDto();
  langSubscription: Subscription;
  constructor(private doctorApi: DoctorApiService, private translateService: TranslateService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.getAllDoctors();
    this.translateMedicalSpeciality(this.translateService.defaultLang);
    this.langSubscription = this.translateService.onLangChange.subscribe(event => this.translateMedicalSpeciality(event.lang))
  }

  private getAllDoctors() {
    this.doctorApi.getDoctorsList().subscribe(list => this.doctorList = list);
  }

  private translateMedicalSpeciality(lang) {
    this.specialities = medicalSpeciality[lang];
  }
  selectedDoctorForEdit: DoctorDto;
  showEditDialog = false;

  edit(doctor: DoctorDto) {
    this.selectedDoctorForEdit = doctor;
    this.showEditDialog = true;
  }

  saveDoctor(doctor: DoctorDto) {
    this.doctorApi.saveDoctor(doctor).subscribe(() => {
      this.toastr.success(this.translateService.instant('doctor.create.success'))
      this.getAllDoctors();
      this.collapsed = true;
    });
  }

  viewSchedule(id) {
    this.router.navigate(['doctor', 'schedule', id])
  }

  updateDoctor(doctor: DoctorDto) {
    let successMessage = this.translateService.instant('doctor.edit.success');
    this.doctorApi.updateDoctor(doctor).subscribe(() => {
      this.toastr.success(successMessage);
      this.getAllDoctors();
      this.showEditDialog = false;
    })
  }

  ngOnDestroy() {
    if (this.langSubscription) this.langSubscription.unsubscribe();
  }
}
