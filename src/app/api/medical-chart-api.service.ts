import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiskFactorsDto } from '../shared/models/PatientRiskFactorsDto';
import { PregnancyInfoDto } from '../shared/models/PregnancyInfoDto';
import { RiskScoreDto } from '../shared/models/RiskScoreDto';
const endpoint = 'http://localhost:8080/api/medical-chart/';

@Injectable({
    providedIn: 'root'
})
export class MedicalChartApiService {
    constructor(private http: HttpClient) { }

    calculateRiskScore(patientId: number): Observable<RiskScoreDto> {
        return this.http.get<RiskScoreDto>(endpoint + 'calculateRiskScore?patientId=' + patientId)
    }

    savePregancyInfo(pregnancyInfo: PregnancyInfoDto): Observable<void> {
        return this.http.post<void>(endpoint + 'savePregancyInfo', pregnancyInfo, {})
    }

    getPregancyInfo(patientId: number): Observable<PregnancyInfoDto> {
        return this.http.get<PregnancyInfoDto>(endpoint + 'getPregancyInfo?patientId=' + patientId)
    }

    getRiskFactors(patientId: number): Observable<RiskFactorsDto> {
        return this.http.get<RiskFactorsDto>(endpoint + 'getRiskFactors?patientId=' + patientId)
    }


    saveRiskFactors(riskFactors: RiskFactorsDto): Observable<void> {
        return this.http.post<void>(endpoint + 'saveRiskFactors', riskFactors);
    }
}