import { NgModule } from '@angular/core';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientsAllComponent } from './patients-all/patients-all.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAlertsComponent } from './patient-alerts/patient-alerts.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule, ButtonModule, RadioButtonModule, AccordionModule, DropdownModule, CheckboxModule } from 'primeng/primeng';
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
    CheckboxModule
  ]
})
export class PatientsModule { }
