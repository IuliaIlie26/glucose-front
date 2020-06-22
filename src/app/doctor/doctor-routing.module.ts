import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [
  {
    path: 'doctor/schedule/:id',
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
