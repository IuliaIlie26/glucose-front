import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from '../api/users-api.service';
import { UserDto } from '../shared/models/UserDto';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls :['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDto = new UserDto();

  constructor(private route: Router, private usersApi: UsersApiService, private permissionService: NgxPermissionsService) { }

  ngOnInit() {
  }

  onLogin() {

    this.usersApi.login(this.userDto).subscribe(role => {
      sessionStorage.setItem("loggedUsername", this.userDto.username);
      let permission = [];
      permission.push(role);
      this.permissionService.loadPermissions(permission);
      this.route.navigate(['/home']);
    })
  }
}
