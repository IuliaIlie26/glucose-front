import { Component, OnInit } from '@angular/core';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { Router } from '@angular/router';
import { ConsultationDto } from '../../models/ConsultationDto';
import { UsersApiService } from 'src/app/api/users-api.service';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { PatientDto } from '../../models/PatientDto';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  constructor(private consultationApi: ConsultationsApiService, private translateService: TranslateService, private toastr: ToastrService, private patientApi: PatientApiService, private router: Router, private usersApi: UsersApiService, private doctorApi: DoctorApiService) { }
  hasOpen = false;
  hasAlerts = false;
  consultationList = [];
  futureConsultationsForPatients = [];
  patient: PatientDto;
  role = ''
  ngOnInit() {
    let username = sessionStorage.getItem('loggedUsername')
    this.role = sessionStorage.getItem('role')

    switch (this.role) {
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
      case 'PATIENT': {
        this.patientApi.getPatientByEmail(username).subscribe(patient => {
          this.patient = patient;
          sessionStorage.setItem('patientId', this.patient.id)
          this.name = this.patient.name + ' ' + this.patient.lastname;
          this.getFutureConsultations();
        })
        break;
      }
    }
  }

  private getFutureConsultations() {
    this.consultationApi.getFutureConsultationForPatient(+this.patient.id).subscribe(cons => this.futureConsultationsForPatients = cons);
  }

  goToAlerts() {
    this.router.navigate(["patient", "patient-alerts"])
  }

  delete(consultation) {
    this.consultationApi.delete(consultation).subscribe(() => {
      this.toastr.success(this.translateService.instant("buttons.success"));
      this.getFutureConsultations();
    })
  }

  openNotes(consultation: ConsultationDto) {
    sessionStorage.setItem("notesDisabled", "false")
    this.router.navigate(['consultation', 'consultation-notes', consultation.consultationId])
  }

  openChart(consultation) {
    this.router.navigate(['patient', 'medical-chart', consultation.patientId])
  }
}
