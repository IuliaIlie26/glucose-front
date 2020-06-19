import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  language = 'RO';
  browserLang = 'en';
  
  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
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
