import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [DoctorHomeComponent,
    SettingsComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
