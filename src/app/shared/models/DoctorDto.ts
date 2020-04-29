import { MedicalAreaDto } from './MedicalAreaDto';
import { PatientDto } from './PatientDto';

export class DoctorDto{

    name: string;
    lastname: string;
    speciality: string;
    patients: PatientDto[] =[];
    username: string;
}