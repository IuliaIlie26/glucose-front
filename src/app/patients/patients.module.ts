import { NgModule } from '@angular/core';
import { PatientAlertsComponent } from './components/patient-alerts/patient-alerts.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { RiskFactorsComponent } from './components/risk-factors/risk-factors.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PatientsRoutingModule } from './patients-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NumbersOnlyDirective } from '../shared/directive/numbers-only.directive';
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
import { DialogModule } from 'primeng/dialog';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PatientAlertsComponent,
    CreatePatientComponent,
    RiskFactorsComponent,
    ManagePatientsComponent,
    ManageSensorComponent,
    PatientEditComponent,
    PatientsListComponent],
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
    MessageModule,
    SharedModule
    ],
  providers: [ConfirmationService]
})
export class PatientsModule { }
