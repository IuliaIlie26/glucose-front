import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  language = 'RO';
  browserLang = 'en';
  patientId;

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private translate: TranslateService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.patientId = sessionStorage.getItem('patientId');
    if (this.patientId == null) {
      this.patientId = 0
    }

  }

  changeLanguage() {

    if (this.browserLang === 'en') {
      this.translate.use('ro');
      this.language = "EN";
      this.browserLang = 'ro';
    } else {
      this.translate.use('en');
      this.language = "RO";

      this.browserLang = 'en';
    }
  }
}
