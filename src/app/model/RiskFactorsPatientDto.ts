import { RiskFactors } from './RiskFactors';

export class RiskFactorsPatientDto {
    riskFactors: RiskFactors[];
    patientId: number;
    age: string;
    height: number;
    weight: number;
    race: string;
    diabetesHistory : string;
    conception : string;
}