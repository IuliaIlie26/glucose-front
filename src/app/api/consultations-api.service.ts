import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultationFilterDto } from '../shared/models/ConsultationFilterDto';
import { ConsultationDto } from '../shared/models/ConsultationDto';
import { PatientDto } from '../shared/models/PatientDto';
import { ConsultationNotesDto } from '../shared/models/ConsultationNotesDto';
const endpoint = 'http://localhost:8080/api/consultations/';
@Injectable({
  providedIn: 'root'
})
export class ConsultationsApiService {
  getFutureConsultationForPatient(patientId: number) : Observable<ConsultationDto[]> {
    return this.http.get<ConsultationDto[]>(endpoint + 'getFutureConsultationForPatient?patientId=' + patientId)
  }


  constructor(private http: HttpClient) { }

  getTodaysConsultations(name: string): Observable<ConsultationDto[]> {
    return this.http.get<ConsultationDto[]>(endpoint + 'getTodaysConsultations?username=' + name)
  }

  saveNotes(currentConsultation: ConsultationNotesDto): Observable<void> {
    return this.http.post<void>(endpoint + 'saveNotes', currentConsultation)
  }

  getCurrentConsultation(username: string): Observable<ConsultationDto> {
    return this.http.get<ConsultationDto>(endpoint + 'getCurrentConsultation?username=' + username)
  }

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

  getPatientConsultations(patientId: number): Observable<ConsultationDto[]> {
    return this.http.get<ConsultationDto[]>(endpoint + 'getPatientConsultations?patientId=' + patientId)
  }

  getConsultationNote(consultationId: string): Observable<ConsultationNotesDto> {
    return this.http.get<ConsultationNotesDto>(endpoint + 'getConsultationNote?consultationId=' + consultationId)
  }

  getConsultationById(consultationId: string): Observable<ConsultationDto> {
    return this.http.get<ConsultationDto>(endpoint + 'getConsultationById?consultationId=' + consultationId)
  }

  getNextConsultationsForDoctor(username: string): Observable<ConsultationDto[]> {
    return this.http.get<ConsultationDto[]>(endpoint + 'getNextConsultationsForDoctor?username=' + username)
  }
}
