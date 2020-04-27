import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [
  {
    path: 'doctor/settings',
    component: SettingsComponent
  },
  {
    path: 'doctor/schedule',
    component: DoctorScheduleComponent
  },
  {
    path: 'doctor/list',
    component: DoctorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
