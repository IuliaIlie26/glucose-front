import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientAlertsComponent } from './components/patient-alerts/patient-alerts.component';
import { RiskFactorsComponent } from './components/risk-factors/risk-factors.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { ManagePatientsComponent } from './components/manage-patients/manage-patients.component';
import { ManageSensorComponent } from './components/manage-sensor/manage-sensor.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientChartComponent } from './components/patient-chart/patient-chart.component';
import { GlucoseChartsComponent } from './glucose-charts/glucose-charts.component';


const routes: Routes = [
  {
    path: 'patient/patient-alerts',
    component: PatientAlertsComponent
  },
  {
    path: 'patient/create-patient',
    component: CreatePatientComponent,
  }, {
    path: 'patient/risk-factors/:patientId',
    component: RiskFactorsComponent
  },
  {
    path: 'patient/manage-patients',
    component: ManagePatientsComponent
  }, {
    path: 'patient/manage-sensor',
    component: ManageSensorComponent
  }, {
    path: 'patient/manage-patients/edit/:patientId',
    component: PatientEditComponent
  },
  {
    path: 'patient/patients-list',
    component: PatientsListComponent
  }, {
    path: 'patient/medical-chart/:patientId',
    component: PatientChartComponent
  }, {
    path: 'patient/glucose-charts/:patientId',
    component: GlucoseChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
