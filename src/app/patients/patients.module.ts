import { NgModule } from '@angular/core';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { PatientsAllComponent } from './components/patients-all/patients-all.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientAlertsComponent } from './components/patient-alerts/patient-alerts.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule, ButtonModule, RadioButtonModule, AccordionModule, DropdownModule, CheckboxModule, InputTextModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PatientsRoutingModule } from './patients-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientAlertsComponent,
    PatientsAllComponent,
    PatientSearchComponent,
    PatientsAllComponent,
    CreatePatientComponent,
    MedicalHistoryComponent
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
    InputTextModule
  ]
})
export class PatientsModule { }
