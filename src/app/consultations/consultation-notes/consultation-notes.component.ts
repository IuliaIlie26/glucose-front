import { Component, OnInit } from '@angular/core';
import { ConsultationNotesDto } from 'src/app/shared/models/ConsultationNotesDto';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InvestigationsTicketDto } from 'src/app/shared/models/InvestigationsTicketDto';
import { InvestiagationsApiService } from 'src/app/api/investigations-api.service';

@Component({
  selector: 'app-consultation-notes',
  templateUrl: './consultation-notes.component.html',
  styleUrls: ['./consultation-notes.component.scss']
})
export class ConsultationNotesComponent implements OnInit {

  consultationNotes: ConsultationNotesDto ;
  investigationTicket: InvestigationsTicketDto;
  consultationId: string;
  collapsed = true;
  constructor(private consultationApi: ConsultationsApiService,private investigationsApi: InvestiagationsApiService, private activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.consultationId = this.activatedRoute.snapshot.paramMap.get('id');
    this.consultationApi.getConsultationNote(this.consultationId).subscribe(note => this.consultationNotes = note)
    this.investigationsApi.getInvestigationTicket(this.consultationId).subscribe(ticket => this.investigationTicket= ticket)
  }

  back() {
    this._location.back();
  }

}
