import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { TableModule, ButtonModule, TooltipModule, DropdownModule, InputTextModule, MessagesModule, MessageModule, ConfirmationService, ConfirmDialogModule, FieldsetModule } from 'primeng';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SettingsComponent, DoctorScheduleComponent, DoctorListComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ConfirmDialogModule,
    TableModule,
    ButtonModule,
    FieldsetModule,
    TooltipModule,
    ToastrModule.forRoot(),
    DropdownModule,
    InputTextModule,
    TranslateModule,
    MessagesModule,
    MessageModule,
    SharedModule
  ],
  providers: [ConfirmationService]
})
export class DoctorModule { }
