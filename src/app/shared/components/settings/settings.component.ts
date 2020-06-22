import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsersApiService } from 'src/app/api/users-api.service';
import { UserDto } from '../../models/UserDto';
import { ToastrService } from 'ngx-toastr';
import { PatientDto } from '../../models/PatientDto';
import { PatientApiService } from 'src/app/api/patient-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  username: string;
  oldPasswordText = '';
  newPasswordText = '';
  role: string;
  passwordRepeat = '';
  errorMessage = '';
  patient: PatientDto;

  constructor(private translateService: TranslateService, private patientApi: PatientApiService, private userApi: UsersApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUsername');
    this.role = sessionStorage.getItem('role');
    if (this.role === 'PATIENT') {
      let patientId = sessionStorage.getItem('patientId');
      this.patientApi.getPatientById(+patientId).subscribe(patient => this.patient = patient);
    }
  }

  changePassword() {
    if (this.passwordRepeat == '' || this.newPasswordText == '' || this.oldPasswordText == '') {
      this.errorMessage = this.translateService.instant('settings.password.required')
    } else if (this.passwordRepeat !== this.newPasswordText) {
      this.errorMessage = this.translateService.instant('settings.password.notMatch')
    }
    else if (this.checkCriteria()) {
      let user = new UserDto();
      user.username = this.username;
      user.password = this.oldPasswordText;
      this.userApi.login(user).subscribe(() => {
        user.password = this.newPasswordText;
        user.role = this.role;
        this.userApi.changePassword(user).subscribe(() =>
          this.toastr.success(this.translateService.instant('buttons.success')))
      })
    }
  }

  checkCriteria() {
    if (this.newPasswordText.length < 8) {
      this.errorMessage = this.translateService.instant('settings.password.tooShort')
      return false;
    }
    else if (/\d/.test(this.newPasswordText) == false) {
      this.errorMessage = this.translateService.instant('settings.password.withNumber')
      return false;
    }
    else if (! /[A-Z]/.test(this.newPasswordText)) {
      this.errorMessage = this.translateService.instant('settings.password.withUppercase')
      return false;
    }
    else if (! /[a-z]/.test(this.newPasswordText)) {
      this.errorMessage = this.translateService.instant('settings.password.withLowercase')
      return false;
    }
    return true;
  }

  updatePatient(patient: PatientDto) {
    let successMessage = this.translateService.instant('patient.edit.success');
    this.patientApi.updatePatient(patient).subscribe(() => {
      this.toastr.success(successMessage);
    })
  }
}
