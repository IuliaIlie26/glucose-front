import { RiskFactors } from './RiskFactors';

export class PatientRiskFactorsDto {
    riskFactors: RiskFactors[];
    patientId: number;
    age: string;
    height: number;
    weight: number;
    race: string;
    diabetesHistory : string;
    conception : string;
}