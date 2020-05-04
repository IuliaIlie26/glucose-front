import { Component, OnInit } from '@angular/core';
import { DoctorDto } from 'src/app/shared/models/DoctorDto';
import { DoctorApiService } from 'src/app/api/doctor-api.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {


  doctorList: DoctorDto[];
  specialities = [];

  constructor(private doctorApi: DoctorApiService) { }

  ngOnInit() {
    this.doctorApi.getDoctorsList().subscribe(list => this.doctorList = list);
  }

  edit(doctor) {

  }

  viewSchedule(id) {

  }
}
