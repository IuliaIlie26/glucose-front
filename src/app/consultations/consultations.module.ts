import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsRoutingModule } from './consultations-routing.module';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';
import { ManageConsultationsComponent } from './manage-consultations/manage-consultations.component';
import { ViewConsultationsComponent } from './view-consultations/view-consultations.component';


@NgModule({
  declarations: [
    CreateConsultationComponent,
    ManageConsultationsComponent,
    ViewConsultationsComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule
  ]
})
export class ConsultationsModule { }
