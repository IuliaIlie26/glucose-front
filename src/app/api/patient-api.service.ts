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

  save(dto: PatientDto): Observable<PatientDto> {
    return this.http.post<PatientDto>(endpoint + 'save', dto, {}).pipe(
      map(response => Object.assign(new PatientDto, response))
    );
  }
}
