import { Component, OnInit } from '@angular/core';
import { PatientDto } from 'src/app/commons/models/PatientDto';
import { AddressDto } from 'src/app/patients/model/AddressDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { SavePatientDto } from '../../model/SavePatientDto';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  patient: PatientDto = new PatientDto();
  savePatientDto: SavePatientDto = new SavePatientDto();
  address: AddressDto = new AddressDto();
  pipe = new DatePipe('en-us');
  constructor(private patientApi: PatientApiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.patient.address = this.address;
    this.patient.birthdate = this.pipe.transform(this.patient.birthdate, 'yyyy-MM-dd');
    this.savePatientDto.patient = this.patient;
    this.savePatientDto.doctorUsername = sessionStorage.getItem("loggedDoctor");
    this.patientApi.savePatient(this.savePatientDto).subscribe(patientId =>
      this.router.navigate(['patient', 'create-patient', 'create-medical-chart', patientId])
    );
  }

}
