import { Component, OnInit } from '@angular/core';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { ConsultationDto } from 'src/app/shared/models/ConsultationDto';
import { Router } from '@angular/router';
import { ConsultationNotesDto } from 'src/app/shared/models/ConsultationNotesDto';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { InvestiagationsApiService } from 'src/app/api/investigations-api.service';
import { InvestigationsTicketDto } from 'src/app/shared/models/InvestigationsTicketDto';

@Component({
  selector: 'app-current-consultation',
  templateUrl: './current-consultation.component.html',
  styleUrls: ['./current-consultation.component.scss']
})
export class CurrentConsultationComponent implements OnInit {

  investigations: InvestigationsTicketDto;
  currentConsultation: ConsultationDto;
  currentConsultationNotes: ConsultationNotesDto;
  constructor(private consultationApi: ConsultationsApiService, private investigationsApi: InvestiagationsApiService, private router: Router, private translateService: TranslateService, private toastr: ToastrService) { }

  ngOnInit() {
    let username = sessionStorage.getItem('loggedUsername')
    this.consultationApi.getCurrentConsultation(username).subscribe(cons => {
      this.currentConsultation = cons;
      this.consultationApi.getConsultationNote(this.currentConsultation.consultationId).subscribe(
        notes => this.currentConsultationNotes = notes
      )
      this.investigationsApi.getInvestigationTicket(this.currentConsultation.consultationId).subscribe(inv => this.investigations = inv)
    });

  }

  goToChart() {
    this.router.navigate(['patient', 'medical-chart', this.currentConsultation.patientId])
  }

  goToNotes() {
    this.router.navigate(['consultation', 'consultation-notes', this.currentConsultation.consultationId])
  }

  saveNotes() {
    this.currentConsultationNotes.consultationId = this.currentConsultation.consultationId;
    this.consultationApi.saveNotes(this.currentConsultationNotes).subscribe(() => this.toastr.success(this.translateService.instant('buttons.success')));
  }

  saveTicket() {
    this.investigations.consultationId = this.currentConsultation.consultationId;
    this.investigationsApi.saveInvestigationTicket(this.investigations).subscribe(() => this.toastr.success(this.translateService.instant('buttons.success')));
  }
}
