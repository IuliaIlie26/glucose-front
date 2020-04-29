import { Component, OnInit, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { AddressDto } from '../../model/AddressDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { countryOptions } from '../../../shared/models/countries.model'
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit, OnChanges {

  patient: PatientDto = new PatientDto();

  constructor(private patientApi: PatientApiService, private router: Router, private translateService: TranslateService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  selectedCountry: SelectItem;

  savePatient(patient: PatientDto) {
    this.patientApi.savePatient(patient).subscribe(patientId =>
      this.router.navigate(['patient', 'create-patient', 'risk-factors', patientId])
    );
  }

  ngOnChanges() {
    console.log(this.patient)
  }

}
