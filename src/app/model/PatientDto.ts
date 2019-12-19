import { DoctorDto } from './DoctorDto';
import { AddressDto } from './AddressDto';

export class PatientDto{
 name : string;
 lastname : string;
 address : AddressDto;
 primaryDoctor: DoctorDto;
 secondaryDoctors: DoctorDto[];
 birthdate: string;
}