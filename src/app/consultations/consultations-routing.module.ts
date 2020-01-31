import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [{
  path: 'consultation/calendar',
  component: CalendarComponent
},
{
  path: 'consultation/create-consultation',
  component: CreateConsultationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
