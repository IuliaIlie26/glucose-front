import { Component, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
 
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    sessionStorage.setItem("username", this.username);
    this.route.navigate(['/doctor/doctor-home']);
  }
}
