import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsRoutingModule } from './consultations-routing.module';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';
import { ManageConsultationsComponent } from './manage-consultations/manage-consultations.component';
import { ViewConsultationsComponent } from './view-consultations/view-consultations.component';
import { DialogModule, CardModule, ConfirmDialogModule, CalendarModule, ButtonModule, RadioButtonModule, TableModule, AccordionModule, FieldsetModule, TooltipModule, DropdownModule, CheckboxModule, InputTextModule, PanelModule, MessagesModule, MessageModule, ConfirmationService } from 'primeng';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateConsultationComponent,
    ManageConsultationsComponent,
    ViewConsultationsComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule,
    DialogModule,
    CardModule,
    HttpClientModule,
    ConfirmDialogModule,
    FormsModule,
    CalendarModule,
    NgbModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    AccordionModule,
    FieldsetModule,
    TooltipModule,
    ToastrModule.forRoot(),
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    TranslateModule,
    MessagesModule,
    MessageModule,
    SharedModule
  ],
  providers: [ConfirmationService]
})
export class ConsultationsModule { }
