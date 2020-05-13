import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultationDto } from '../shared/models/ConsultationDto';
import { ConsultationSpotDto } from '../shared/models/ConsultationSpotDto';
const endpoint = 'http://localhost:8080/api/consultations/';
@Injectable({
  providedIn: 'root'
})
export class ConsultationsApiService {

  constructor(private http: HttpClient) { }

 
  findConsultationSpots(filter: ConsultationDto): Observable<ConsultationSpotDto[]> {
    return this.http.post<ConsultationSpotDto[]>(endpoint + 'getFreeSpots', filter)
  }
}
