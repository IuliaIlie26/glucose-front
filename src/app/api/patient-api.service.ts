import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientDto } from '../shared/models/PatientDto';
import { PatientAlertsDto } from '../shared/models/PatientAlertsDto';

const endpoint = 'http://localhost:8080/api/patient/';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  deleteAlertsForDoctor(username: string): Observable<void> {
    return this.http.post<void>(endpoint + 'deleteAlertsForDoctor', username, {})
  }
  getAlertsListForPatient(patientId: number): Observable<PatientAlertsDto[]> {
    return this.http.get<PatientAlertsDto[]>(endpoint + 'getAlertsListForPatient?patientId=' + patientId);
  }
  constructor(private http: HttpClient) { }

  savePatient(dto: PatientDto): Observable<void> {
    return this.http.post<void>(endpoint + 'savePatient', dto, {})
  }

  getFullFormatAgeById(id: number): Observable<string> {
    return this.http.get<string>(endpoint + 'getFullFormatAgeById?id=' + id, { responseType: 'text' as 'json' })
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

  getPatientNameByCnp(cnp: string): Observable<string> {
    return this.http.get<string>(endpoint + 'getPatientNameByCnp?cnp=' + cnp, { responseType: 'text' as 'json' })
  }

  getAllPatientAlertsForDoctor(username: string): Observable<PatientDto[]> {
    return this.http.get<PatientDto[]>(endpoint + 'getAllPatientAlertsForDoctor?username=' + username);
  }

}
