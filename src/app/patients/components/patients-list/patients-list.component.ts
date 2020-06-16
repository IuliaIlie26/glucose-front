import { Component, OnInit } from '@angular/core';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patients: PatientDto[] = [];
  constructor(private consultationApi: ConsultationsApiService, private router: Router) { }

  ngOnInit() {
    let username = sessionStorage.getItem("loggedUsername")
    this.consultationApi.getPatientsForDoctor(username).subscribe(patients => this.patients = patients);
  }

  openChart(id: string) {
    this.router.navigate(['patient','medical-chart', id])
  }
}
