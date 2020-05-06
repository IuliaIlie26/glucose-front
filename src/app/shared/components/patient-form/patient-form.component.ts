import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { countryOptions } from '../../models/countries.model'
import { PatientDto } from '../../models/PatientDto';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { SelectItem } from 'primeng';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit, OnChanges {

  countryOptions: Array<any>
  @Input() patient: PatientDto;
  selectedBirthdate: Date;
  @Output() onSave = new EventEmitter<PatientDto>();
  selectedCountry: SelectItem;
  pipe = new DatePipe('en-us');
  maxDate = new Date();
  constructor(public translateService: TranslateService, private toastr: ToastrService) { }

  ngOnInit() {
    this.countryOptions = countryOptions;
    if (this.patient.address.country) {
      this.selectedCountry = { 'label': this.patient.address.country, 'value': this.patient.address.country };
    }
    if (this.patient.birthdate) {
      this.selectedBirthdate = new Date(this.patient.birthdate);
    }
  }

  isValid() {
    return (this.patient.name && this.patient.lastname && this.selectedBirthdate && this.patient.email && this.patient.phone && this.patient.address.addressLine1 &&
      this.patient.address.city && this.selectedCountry && this.patient.address.region)
  }

  ngOnChanges(change: SimpleChanges) {
  }

  emitPatientInformation() {
    if (this.isValid()) {
      this.patient.address.country = this.selectedCountry.label;
      this.patient.birthdate= this.pipe.transform(this.selectedBirthdate, 'yyyy-MM-dd');
      this.onSave.emit(this.patient);
    } else {
      this.toastr.error(this.translateService.instant("error.fields.required"))
    }
  }
}
