import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  name: string;
  constructor() { }

  ngOnInit() {
    this.name = sessionStorage.getItem('loggedUsername')
  }
}
