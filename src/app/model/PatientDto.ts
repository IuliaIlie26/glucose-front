import { DoctorDto } from './DoctorDto';
import { AddressDto } from './AddressDto';

export class PatientDto{
 name : string;
 lastname : string;
 address : AddressDto;
 doctor: DoctorDto;
 birthdate: string;
 phone: string;
 email: string
}