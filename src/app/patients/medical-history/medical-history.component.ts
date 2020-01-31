import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  patientId: string;

  ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
  }

}
