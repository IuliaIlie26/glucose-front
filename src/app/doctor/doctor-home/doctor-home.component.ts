import { Component, OnInit } from '@angular/core';
import { DoctorApiService } from 'src/app/api/doctor-api.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent implements OnInit {

  greet: string;
  constructor(private doctorApi: DoctorApiService) { }

  ngOnInit() {
    let username = sessionStorage.getItem("loggedDoctor");
    this.doctorApi.getDoctorNameAndLastname(username).subscribe(nameAndLastName => this.greet = "Hello, " + nameAndLastName);
  }

}
