import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavePatientDto } from '../patients/model/SavePatientDto';
const endpoint = 'http://localhost:8080/api/patient/';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  constructor(private http: HttpClient) { }

  savePatient(dto: SavePatientDto): Observable<number> {
    return this.http.post<number>(endpoint + 'savePatient', dto, {})
  }

  getFullFormatAgeById(id: number): Observable<string> {
    return this.http.get<string>(endpoint + 'getFullFormatAgeById?id='+id, { responseType: 'text' as 'json' })
  }
}
