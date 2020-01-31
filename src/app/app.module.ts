import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { SettingsComponent } from './doctor/settings/settings.component';
import { CalendarComponent } from './consultations/calendar/calendar.component';
import { PatientAlertsComponent } from './patients/patient-alerts/patient-alerts.component';
import { CreateConsultationComponent } from './consultations/create-consultation/create-consultation.component';
import { PatientSearchComponent } from './patients/patient-search/patient-search.component';
import { PatientsAllComponent } from './patients/patients-all/patients-all.component';
import { CreatePatientComponent } from './patients/create-patient/create-patient.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/accordion';
import { ToastrModule } from 'ngx-toastr';
import { MedicalHistoryComponent } from './patients/medical-history/medical-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorHomeComponent,
    LoginComponent,
    NavbarComponent,
    PatientListComponent,
    SettingsComponent,
    CalendarComponent,
    PatientAlertsComponent,
    CreateConsultationComponent,
    PatientSearchComponent,
    PatientsAllComponent,
    CreatePatientComponent,
    MedicalHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    NgbModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    AccordionModule,
    ToastrModule.forRoot()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }