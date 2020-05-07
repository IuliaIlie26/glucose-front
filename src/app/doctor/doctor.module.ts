import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { TableModule, ButtonModule, TooltipModule, DropdownModule, InputTextModule, MessagesModule, MessageModule, ConfirmationService, ConfirmDialogModule, FieldsetModule, AccordionModule, RadioButtonModule, DialogModule, CalendarModule, CheckboxModule, PanelModule } from 'primeng';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [SettingsComponent, DoctorScheduleComponent, DoctorListComponent, DoctorCreateComponent],
  imports: [
    CommonModule,
    DialogModule,
    CardModule,
    HttpClientModule,
    ConfirmDialogModule,
    FormsModule,
    DoctorRoutingModule,
    CalendarModule,
    NgbModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    AccordionModule,
    FieldsetModule,
    TooltipModule,
    ToastrModule.forRoot(),
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
export class DoctorModule { }
