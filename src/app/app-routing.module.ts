import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { SettingsComponent } from './doctor/settings/settings.component';
import { CalendarComponent } from './consultations/calendar/calendar.component';
import { PatientSearchComponent } from './patients/patient-search/patient-search.component';
import { CreatePatientComponent } from './patients/create-patient/create-patient.component';
import { CreateConsultationComponent } from './consultations/create-consultation/create-consultation.component';
import { PatientAlertsComponent } from './patients/patient-alerts/patient-alerts.component';
import { MedicalHistoryComponent } from './patients/medical-history/medical-history.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'doctor-home',
    component: DoctorHomeComponent
  },
  {
    path: 'patients-list',
    component: PatientListComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'search',
    component: PatientSearchComponent
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent,
    children: [
      {
        path: 'create-medical-chart/:patientId',
        component: MedicalHistoryComponent
      }
    ]
  },
  { path: 'create-consultation', component: CreateConsultationComponent },
  { path: 'patient-alerts', component: PatientAlertsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }