import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { permissionsList } from './commons/models/permissions.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  title: string;

  constructor(private translate: TranslateService, private permissionService: NgxPermissionsService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.isLoggedIn = true;
    this.permissionService.loadPermissions(permissionsList);
  }
}