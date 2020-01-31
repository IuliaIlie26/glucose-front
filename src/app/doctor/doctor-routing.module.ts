import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: 'doctor/doctor-home',
    component: DoctorHomeComponent
  },
  {
    path: 'doctor/settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
