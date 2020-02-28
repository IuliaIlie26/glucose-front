import { DoctorDto } from './DoctorDto';
import { AddressDto } from '../../patients/model/AddressDto';

export class PatientDto {
    name: string;
    lastname: string;
    address: AddressDto;
    doctors: DoctorDto[] = [];
    birthdate: string;
    phone: string;
    email: string
}