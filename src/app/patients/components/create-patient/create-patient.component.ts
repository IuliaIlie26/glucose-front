import { Component, OnInit } from '@angular/core';
/*  */import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { SavePatientDto } from '../../model/SavePatientDto';
import { TranslateService } from '@ngx-translate/core';
import { PatientDto } from 'src/app/commons/models/PatientDto';
import { AddressDto } from '../../model/AddressDto';
import { PatientApiService } from 'src/app/api/patient-api.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  errors = "";
  patient: PatientDto = new PatientDto();
  savePatientDto: SavePatientDto = new SavePatientDto();
  address: AddressDto = new AddressDto();
  pipe = new DatePipe('en-us');
  maxDate = new Date();
  constructor(private patientApi: PatientApiService, private router: Router, private translateService: TranslateService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  save() {
    if (this.validate()) {
      this.patient.address = this.address;
      this.patient.birthdate = this.pipe.transform(this.patient.birthdate, 'yyyy-MM-dd');
      this.savePatientDto.patient = this.patient;
      this.savePatientDto.doctorUsername = sessionStorage.getItem("loggedDoctor");
      this.patientApi.savePatient(this.savePatientDto).subscribe(patientId =>
        this.router.navigate(['patient', 'create-patient', 'risk-factors', patientId])
      );
    }
  }

  validate() {
    if (!(this.patient.name && this.patient.lastname && this.patient.birthdate &&
      this.patient.email && this.patient.phone && this.address.addressLine1 &&
      this.address.city && this.address.country && this.address.region)) {
      this.toastr.error(this.translateService.instant("error.fields.required"))
      return false;
    }
    return true;
  }

}
