import { Component, OnInit } from '@angular/core';
import { ConsultationNotesDto } from 'src/app/shared/models/ConsultationNotesDto';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-consultation-notes',
  templateUrl: './consultation-notes.component.html',
  styleUrls: ['./consultation-notes.component.scss']
})
export class ConsultationNotesComponent implements OnInit {

  consultationNotes: ConsultationNotesDto = new ConsultationNotesDto();
  investigationList=""
  consultationId: string;
  constructor(private consultationApi: ConsultationsApiService, private activatedRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.consultationId = this.activatedRoute.snapshot.paramMap.get('consultationId');
    this.consultationApi.getConsultationNote(this.consultationId).subscribe(note => this.consultationNotes = note)
  }

  back() {
    this._location.back();
  }

}
