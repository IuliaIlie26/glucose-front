import { NgModule } from '@angular/core';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { PatientsAllComponent } from './components/patients-all/patients-all.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientAlertsComponent } from './components/patient-alerts/patient-alerts.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { RiskFactorsComponent } from './components/risk-factors/risk-factors.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PatientsRoutingModule } from './patients-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NumbersOnlyDirective } from '../commons/directive/numbers-only.directive';
import { ManagePatientsComponent } from './components/manage-patients/manage-patients.component';
import { ManageSensorComponent } from './components/manage-sensor/manage-sensor.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {DialogModule} from 'primeng/dialog';
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
    DialogModule,
    HttpClientModule,
    ConfirmDialogModule,
    FormsModule,
    CalendarModule,
    NgbModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    AccordionModule,
    TooltipModule,
    ToastrModule.forRoot(),
    PatientsRoutingModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    TranslateModule,
    MessagesModule,
    MessageModule
  ],
  providers: [ConfirmationService]
})
export class PatientsModule { }
