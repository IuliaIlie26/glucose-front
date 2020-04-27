import { AddressDto } from '../../patients/model/AddressDto';

export class PatientDto {
    name: string;
    lastname: string;
    address: AddressDto;
    birthdate: string;
    phone: string;
    email: string;
    cnp: string;
    fullAddress: string;
}