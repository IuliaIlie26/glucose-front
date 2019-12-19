import { Component, OnInit } from '@angular/core';
import { PatientDto } from 'src/app/model/PatientDto';
import { AddressDto } from 'src/app/model/AddressDto';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { ToastrService } from 'ngx-toastr';
import { DoctorDto } from 'src/app/model/DoctorDto';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  patient: PatientDto = new PatientDto();
  newPatient: PatientDto;
  address: AddressDto = new AddressDto();
  constructor(private patientApi: PatientApiService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  save() {

    if(this.validateForm()){
      this.patient.address=this.address;
      let doc = new DoctorDto();
      doc.name = sessionStorage.getItem("username");
      this.patient.primaryDoctor = doc;
        this.patientApi.save(this.patient).subscribe(result => {this.newPatient = result;
        this.toastr.success()});
    }
    else{
      this.toastr.error("Please fill the required information!");
    }
  }

  validateForm(){
    return true;
  }
}
