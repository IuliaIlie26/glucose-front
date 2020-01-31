import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/accordion';
import { ToastrModule } from 'ngx-toastr';
import { PatientsModule } from './patients/patients.module';
import { DoctorModule } from './doctor/doctor.module';
import { ConsultationsModule } from './consultations/consultations.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
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
    PatientsModule,
    ToastrModule.forRoot(),
    DoctorModule,
    ConsultationsModule,
    PatientsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }