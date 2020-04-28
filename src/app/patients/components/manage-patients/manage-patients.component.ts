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
  selectedPatient: PatientDto;
  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.patientApi.getAllPatients().subscribe(patients => this.patients = patients);
  }

}
