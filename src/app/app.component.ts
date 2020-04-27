import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  title: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.isLoggedIn = true;
  }
}