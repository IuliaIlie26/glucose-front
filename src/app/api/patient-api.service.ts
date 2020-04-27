import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiskFactorsDto } from '../commons/models/PatientRiskFactorsDto';
import { PatientDto } from '../commons/models/PatientDto';
const endpoint = 'http://localhost:8080/api/patient/';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  constructor(private http: HttpClient) { }

  savePatient(dto: PatientDto): Observable<number> {
    return this.http.post<number>(endpoint + 'savePatient', dto, {})
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
}
