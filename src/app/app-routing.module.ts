import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./consultations/consultations.module').then(m => m.ConsultationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }