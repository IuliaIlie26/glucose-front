import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


@NgModule({
  declarations: [SettingsComponent, DoctorScheduleComponent, DoctorListComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
