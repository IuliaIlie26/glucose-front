import { Component, OnInit } from '@angular/core';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  patientId: string;
  constructor(private patientApi: PatientApiService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private translateService: TranslateService) { }
  selectedPatient: PatientDto;

  ngOnInit() {
    this.patientId = this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getPatientById(+this.patientId).subscribe(patient => this.selectedPatient = patient);
  }

  updatePatient(patient: PatientDto) {
    let successMessage = this.translateService.instant('patient.edit.success');
    this.patientApi.updatePatient(patient).subscribe(() => {
      this.toastr.success(successMessage);
      this.router.navigate(['patient', 'manage-patients'])
    })
  }
}
