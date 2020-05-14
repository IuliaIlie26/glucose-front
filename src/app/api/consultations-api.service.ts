import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultationFilterDto } from '../shared/models/ConsultationDto';
import { ConsultationDto } from '../shared/models/ConsultationSpotDto';
const endpoint = 'http://localhost:8080/api/consultations/';
@Injectable({
  providedIn: 'root'
})
export class ConsultationsApiService {

  constructor(private http: HttpClient) { }
 
  findConsultationSpots(filter: ConsultationFilterDto): Observable<ConsultationDto[]> {
    return this.http.post<ConsultationDto[]>(endpoint + 'getFreeSpots', filter)
  }

  reserve(consultation : ConsultationDto): Observable<void>{
    return this.http.post<void>(endpoint + 'saveConsultation', consultation)
  }
}
