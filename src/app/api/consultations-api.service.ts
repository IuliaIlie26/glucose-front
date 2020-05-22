import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultationFilterDto } from '../shared/models/ConsultationFilterDto';
import { ConsultationDto } from '../shared/models/ConsultationDto';
import { PatientDto } from '../shared/models/PatientDto';
const endpoint = 'http://localhost:8080/api/consultations/';
@Injectable({
  providedIn: 'root'
})
export class ConsultationsApiService {

  constructor(private http: HttpClient) { }

  findConsultationSpots(filter: ConsultationFilterDto): Observable<ConsultationDto[]> {
    return this.http.post<ConsultationDto[]>(endpoint + 'getFreeSpots', filter)
  }

  reserve(consultation: ConsultationDto): Observable<void> {
    return this.http.post<void>(endpoint + 'saveConsultation', consultation)
  }

  getAllConsultations(): Observable<ConsultationDto[]> {
    return this.http.get<ConsultationDto[]>(endpoint + 'getAllConsultations')
  }

  delete(consultation: ConsultationDto): Observable<void> {
    return this.http.post<void>(endpoint + "delete", consultation);
  }

  getPatientsForDoctor(username: string): Observable<PatientDto[]> {
    return this.http.get<PatientDto[]>(endpoint + 'getPatientsForDoctor?username=' + username)
  }
}
