import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { ConsultationDto } from 'src/app/shared/models/ConsultationDto';

@Component({
  selector: 'app-view-consultations',
  templateUrl: './view-consultations.component.html',
  styleUrls: ['./view-consultations.component.scss']
})
export class ViewConsultationsComponent implements OnInit {

  constructor(private consultationApi: ConsultationsApiService) { }

  specialities: Array<any>;
  consultationList: ConsultationDto[];

  ngOnInit() {
    let username= sessionStorage.getItem('loggedUsername')
    this.consultationApi.getNextConsultationsForDoctor(username).subscribe(list => this.consultationList = list)
  }
}
