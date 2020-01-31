import { NgModule } from '@angular/core';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientsAllComponent } from './patients-all/patients-all.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAlertsComponent } from './patient-alerts/patient-alerts.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule, ButtonModule, RadioButtonModule, AccordionModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';


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
    
    HttpClientModule,
    FormsModule,
    CalendarModule,
    NgbModule,
    ButtonModule,
    RadioButtonModule,
    AccordionModule,
    ToastrModule.forRoot(),
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
