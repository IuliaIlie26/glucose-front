import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientAlertsComponent } from './components/patient-alerts/patient-alerts.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';


const routes: Routes = [
  {
    path: 'patient/patient-alerts',
    component: PatientAlertsComponent
  },
  {
    path: 'patient/search',
    component: PatientSearchComponent
  },
  {
    path: 'patient/create-patient',
    component: CreatePatientComponent,
  }, {
    path: 'patient/create-patient/create-medical-chart/:patientId',
    component: MedicalHistoryComponent
  },
  {
    path: 'patient/patients-list',
    component: PatientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
