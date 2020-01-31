import { Component, OnInit } from '@angular/core';
import { PatientDto } from 'src/app/model/PatientDto';
import { AddressDto } from 'src/app/model/AddressDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorDto } from 'src/app/model/DoctorDto';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  patient: PatientDto = new PatientDto();
  address: AddressDto = new AddressDto();
  pipe = new DatePipe('en-us');
  constructor(private patientApi: PatientApiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  save() {

    if (this.validateForm()) {
      this.patient.address = this.address;
      let doc = new DoctorDto();
      doc.name = sessionStorage.getItem("username");
      this.patient.doctor = doc;

      this.patient.birthdate = this.pipe.transform(this.patient.birthdate, "shortDate");
      this.patientApi.savePatient(this.patient).subscribe(patientId =>
        this.router.navigate(['patient', 'create-patient', 'create-medical-chart', patientId])
      );
    }
    else {
      this.toastr.error("Please fill the required information!");
    }
  }

  validateForm() {
    return true;
  }
}
