import { Component, OnInit } from '@angular/core';
import { ConsultationsApiService } from 'src/app/api/consultations-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  name: string;
  constructor(private consultationApi: ConsultationsApiService, private router: Router) { }
  hasOpen = false;
  ngOnInit() {
    this.name = sessionStorage.getItem('loggedUsername')
    let role = sessionStorage.getItem('role')
    if (role == 'DOCTOR') {
      this.consultationApi.getCurrentConsultation(this.name).subscribe(cons => {
        if (cons.patientName) {
          this.hasOpen = true;
        }
      });
    }
  }
  goToConsultations() {
    this.router.navigate(['consultation', 'current-consultation'])
  }
}
