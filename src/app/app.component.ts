import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './shared/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  title: string;

  constructor(private translate: TranslateService, private authService: AuthService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
     this.authService.isLoggedIn.subscribe(log => this.isLoggedIn = log)
  }
}