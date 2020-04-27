import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { ToastrModule } from 'ngx-toastr';
import { PatientsModule } from './patients/patients.module';
import { DoctorModule } from './doctor/doctor.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { HttpRequestsInterceptor } from './commons/service/http-interceptor';
import { PatientApiService } from './api/patient-api.service';
import { DoctorApiService } from './api/doctor-api.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UsersApiService } from './api/users-api.service';
import { HomeComponent } from './commons/components/home/home.component';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PasswordModule,
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
    PatientsModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxPermissionsModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestsInterceptor, multi: true },
    PatientApiService,
    DoctorApiService,
    UsersApiService
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}