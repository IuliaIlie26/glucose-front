import { Component, OnInit } from '@angular/core';
import {PatientApiService} from '../../api/patient-api.service'

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent implements OnInit {

  greet: string;
  constructor(private patientApi : PatientApiService) { }

  ngOnInit() {
    
  }

}
