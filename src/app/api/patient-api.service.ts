import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiskFactorsDto } from '../shared/models/PatientRiskFactorsDto';
import { PatientDto } from '../shared/models/PatientDto';
import { PatientSensorDistributionDto } from '../patients/model/PatientSensorDistributionDto';
import { MessageDto } from '../shared/models/MessageDto';
import { PregnancyInfoDto } from '../shared/models/PregnancyInfoDto';
import { RiskScoreDto } from '../shared/models/RiskScoreDto';
const endpoint = 'http://localhost:8080/api/patient/';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {


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

  constructor(private http: HttpClient) { }

  savePatient(dto: PatientDto): Observable<void> {
    return this.http.post<void>(endpoint + 'savePatient', dto, {})
  }

  getFullFormatAgeById(id: number): Observable<string> {
    return this.http.get<string>(endpoint + 'getFullFormatAgeById?id=' + id, { responseType: 'text' as 'json' })
  }

  saveRiskFactors(riskFactors: RiskFactorsDto): Observable<void> {
    return this.http.post<void>(endpoint + 'saveRiskFactors', riskFactors);
  }

  getAllPatients(): Observable<PatientDto[]> {
    return this.http.get<PatientDto[]>(endpoint + 'getAllPatients');
  }

  deletePatientById(id: string): Observable<void> {
    return this.http.post<void>(endpoint + 'deletePatientById', id);
  }

  getPatientById(id: number): Observable<PatientDto> {
    return this.http.get<PatientDto>(endpoint + 'getPatientById?id=' + id);
  }

  updatePatient(dto: PatientDto): Observable<void> {
    return this.http.post<void>(endpoint + 'updatePatient', dto, {})
  }

  assignSensor(dto: PatientSensorDistributionDto): Observable<MessageDto> {
    return this.http.post<MessageDto>(endpoint + 'assignSensor', dto);
  }

  getSensorDistribution(): Observable<PatientSensorDistributionDto[]> {
    return this.http.get<PatientSensorDistributionDto[]>(endpoint + 'getSensorDistribution');
  }

  getPatientNameByCnp(cnp: string): Observable<string> {
    return this.http.get<string>(endpoint + 'getPatientNameByCnp?cnp=' + cnp, { responseType: 'text' as 'json' })
  }

}
