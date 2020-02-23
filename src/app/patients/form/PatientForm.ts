import { FormGroup, FormControl } from '@angular/forms';
import { PatientDto } from 'src/app/model/PatientDto';

export class PatientForm extends FormGroup{
    constructor(private patientDto : PatientDto){
        super({
            name : new FormControl(patientDto.name),
            lastname : new FormControl(patientDto.lastname),
            address : new FormControl(patientDto.address),
            doctors : new FormControl(patientDto.doctors),
            birthdate : new FormControl(patientDto.birthdate),
            phone : new FormControl(patientDto.phone),
            email : new FormControl(patientDto.email)
        });
    }
}