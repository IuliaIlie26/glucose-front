import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsRoutingModule } from './consultations-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CreateConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule
  ]
})
export class ConsultationsModule { }
