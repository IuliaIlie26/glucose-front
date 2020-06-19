import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-patient-alerts',
  templateUrl: './patient-alerts.component.html',
  styleUrls: ['./patient-alerts.component.scss']
})
export class PatientAlertsComponent implements OnInit {

  patientAlerts: PatientDto[] = [];
  constructor(private router: Router, private patientApi: PatientApiService, private toastr: ToastrService, private translateService: TranslateService) { }

  ngOnInit() {
    let username = sessionStorage.getItem("loggedUsername");
    this.patientApi.getAllPatientAlertsForDoctor(username).subscribe(alerts => this.patientAlerts = alerts)
  }

  openChart(id: number) {
    this.router.navigate(['patient', 'medical-chart', id])
  }

  deleteAlerts() {
    let username = sessionStorage.getItem("loggedUsername");
    this.patientApi.deleteAlertsForDoctor(username).subscribe(() => {
      this.patientAlerts=[]
      this.toastr.success(this.translateService.instant("buttons.success"))
    })
  }
}
