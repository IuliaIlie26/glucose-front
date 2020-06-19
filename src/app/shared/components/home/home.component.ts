import { Component, OnInit } from '@angular/core';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { Router } from '@angular/router';
import { ConsultationDto } from '../../models/ConsultationDto';
import { UsersApiService } from 'src/app/api/users-api.service';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { PatientApiService } from 'src/app/api/patient-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  constructor(private consultationApi: ConsultationsApiService, private patientApi: PatientApiService, private router: Router, private usersApi: UsersApiService, private doctorApi: DoctorApiService) { }
  hasOpen = false;
  hasAlerts = false;
  consultationList = [];
  ngOnInit() {
    let username = sessionStorage.getItem('loggedUsername')
    let role = sessionStorage.getItem('role')

    switch (role) {
      case 'ADMINISTRATOR': {
        this.usersApi.getAdminNameById(username).subscribe(name => this.name = name);
        break;
      }
      case 'DOCTOR': {

        this.patientApi.getAllPatientAlertsForDoctor(username).subscribe(alerts => {
          if (alerts.length > 0) this.hasAlerts = true;
        })
        this.doctorApi.getDoctorNameAndLastnameByUsername(username).subscribe(name => this.name = name)
        this.consultationApi.getTodaysConsultations(username).subscribe(cons => this.consultationList = cons);
        break;
      }
      case 'PATIENT': { break; }
    }
  }

  goToAlerts() {
    this.router.navigate(["patient", "patient-alerts"])
  }

  openNotes(consultation: ConsultationDto) {
    sessionStorage.setItem("notesDisabled", "false")
    this.router.navigate(['consultation', 'consultation-notes', consultation.consultationId])
  }

  openChart(consultation) {
    this.router.navigate(['patient', 'medical-chart', consultation.patientId])
  }
}
