import { Component, OnInit } from '@angular/core';
import { PatientDto } from 'src/app/commons/models/PatientDto';
import { PatientApiService } from 'src/app/api/patient-api.service';

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.scss']
})
export class ManagePatientsComponent implements OnInit {

  patients: PatientDto[] = [];
  constructor(private patientApi: PatientApiService) { }

  columnMetaData = [
    { header: 'patient.create.name', field: 'name' },
    { header: 'patient.create.lastname', field: 'lastname' },
    { header: 'patient.create.cnp', field: 'cnp' },
    { header: 'patient.create.phone.number', field: 'phone' },
    { header: 'patient.create.email', field: 'email' },
    { header: 'patient.create.header.address', field: 'fullAddress' }
  ];

  ngOnInit() {
    this.patientApi.getAllPatients().subscribe(patients => this.patients = patients);
  }

}
