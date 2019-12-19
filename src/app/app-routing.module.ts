import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorHomeComponent } from './doctor-pages/doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './doctor-pages/patient-list/patient-list.component';
import { SettingsComponent } from './doctor-pages/settings/settings.component';
import { CalendarComponent } from './doctor-pages/calendar/calendar.component';
import { PatientSearchComponent } from './doctor-pages/patient-search/patient-search.component';
import { CreatePatientComponent } from './doctor-pages/create-patient/create-patient.component';
import { CreateConsultationComponent } from './doctor-pages/create-consultation/create-consultation.component';
import { PatientAlertsComponent } from './doctor-pages/patient-alerts/patient-alerts.component';
 
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'doctor-home', component: DoctorHomeComponent },
  {path: 'patients-list', component: PatientListComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'calendar', component: CalendarComponent},
  { path: 'search', component: PatientSearchComponent},
  { path: 'create-patient', component: CreatePatientComponent},
  { path: 'create-consultation', component: CreateConsultationComponent },
  {path: 'patient-alerts', component: PatientAlertsComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }