export class RiskFactorsDto {
    patientId: number;
    height: number;
    weight: number;
    racialOrigin: string;
    familyHistoryOfDiabetes: string;
    conceptionMethod: string;
    smoker: boolean;
    macrosomicBaby: boolean;
    previousGDM: boolean;
    historyOfAdverseOutcomes: boolean;
    multipara: boolean;
}