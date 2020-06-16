import { Component, OnInit } from '@angular/core';
import { PatientDto } from 'src/app/shared/models/PatientDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.scss']
})
export class ManagePatientsComponent implements OnInit {

  patients: PatientDto[] = [];
  message: Message[];

  constructor(private patientApi: PatientApiService, private confirmationService: ConfirmationService, private translateService: TranslateService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientApi.getAllPatients().subscribe(patients => this.patients = patients);
  }

  edit(patient) {
    this.router.navigate(['patient', 'manage-patients', 'edit', patient.id])
  }

  onDelete(id: string) {
    this.confirmDeletion(id);
  }

  confirmDeletion(id) {
    let confirmationMessage = this.translateService.instant('confirmation.message.delete');
    let headerMessage = this.translateService.instant('confirmation.header.delete');
    this.confirmationService.confirm({
      message: confirmationMessage,
      header: headerMessage,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deletePatient(id);
      },
      reject: () => {
        let summaryMessage = this.translateService.instant('confirmation.message.rejected');
        let detailMessage = this.translateService.instant('confirmation.message.deletion.rejected');
        this.message = [{ severity: 'info', summary: summaryMessage, detail: detailMessage }];
      }
    });
  }

  deletePatient(id: string) {
    this.patientApi.deletePatientById(id).subscribe(() => {
      let successMessage = this.translateService.instant('confirmation.message.success')
      this.toastr.success(successMessage);
      this.getPatients();
    });
  }
}
