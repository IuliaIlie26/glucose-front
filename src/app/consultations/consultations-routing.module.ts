import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';
import { ManageConsultationsComponent } from './manage-consultations/manage-consultations.component';
import { ViewConsultationsComponent } from './view-consultations/view-consultations.component';
import { ConsultationNotesComponent } from './consultation-notes/consultation-notes.component';
import { CurrentConsultationComponent } from './current-consultation/current-consultation.component';

const routes: Routes = [{
  path: 'consultation/manage-consultations',
  component: ManageConsultationsComponent
},
{
  path: 'consultation/create-consultation',
  component: CreateConsultationComponent
},
{
  path: 'consultation/view-consultations',
  component: ViewConsultationsComponent
},
{
  path: 'consultation/consultation-notes/:id',
  component: ConsultationNotesComponent
},
{
  path: 'consultation/current-consultation',
  component: CurrentConsultationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
