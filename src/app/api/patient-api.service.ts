import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientDto } from '../model/PatientDto';
import { map } from 'rxjs/operators'
const endpoint = 'http://localhost:8080/api/patient/';
@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  constructor(private http: HttpClient) { }

  savePatient(dto: PatientDto): Observable<number> {
    return this.http.post<number>(endpoint + 'savePatient', dto, {})
  }
}
