import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { UsersApiService } from 'src/app/api/users-api.service';
import { UserDto } from '../../models/UserDto';
import { AuthService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDto = new UserDto();
  constructor(private route: Router, private usersApi: UsersApiService, private permissionService: NgxPermissionsService, private authService: AuthService) { }

  ngOnInit() {
    sessionStorage.clear();
    this.authService.logout();
  }

  onLogin() {

    this.usersApi.login(this.userDto).subscribe(role => {
      sessionStorage.setItem("loggedUsername", this.userDto.username);
      sessionStorage.setItem("role", role);
      let permission = [];
      permission.push(role);
      this.permissionService.loadPermissions(permission);
      this.authService.login();
      this.route.navigate(['/home']);
    })
  }
}
