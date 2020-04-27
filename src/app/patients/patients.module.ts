import { NgModule } from '@angular/core';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { PatientsAllComponent } from './components/patients-all/patients-all.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientAlertsComponent } from './components/patient-alerts/patient-alerts.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { RiskFactorsComponent } from './components/risk-factors/risk-factors.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, ButtonModule, RadioButtonModule, AccordionModule, DropdownModule, CheckboxModule, InputTextModule, PanelModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PatientsRoutingModule } from './patients-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NumbersOnlyDirective } from '../commons/directive/numbers-only.directive';
import { ManagePatientsComponent } from './components/manage-patients/manage-patients.component';
import { ManageSensorComponent } from './components/manage-sensor/manage-sensor.component';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientAlertsComponent,
    PatientsAllComponent,
    PatientSearchComponent,
    PatientsAllComponent,
    CreatePatientComponent,
    RiskFactorsComponent,
    NumbersOnlyDirective,
    ManagePatientsComponent,
    ManageSensorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    NgbModule,
    ButtonModule,
    RadioButtonModule,
    AccordionModule,
    ToastrModule.forRoot(),
    PatientsRoutingModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class PatientsModule { }
