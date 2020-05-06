import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorDto } from '../shared/models/DoctorDto';
const endpoint = 'http://localhost:8080/api/doctor/';
@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {

  constructor(private http: HttpClient) { }

  getDoctorByUsername(username: string): Observable<DoctorDto> {
    return this.http.get<DoctorDto>(endpoint + 'getDoctorByUsername?username=' + username, {})
  }

  getDoctorNameAndLastname(username: string): Observable<string> {
    return this.http.get<string>(endpoint + 'getDoctorNameAndLastname?username=' + username, {})
  }

  getDoctorsList(): Observable<DoctorDto[]> {
    return this.http.get<DoctorDto[]>(endpoint + 'getDoctorsList')
  }

  saveDoctor(doctor: DoctorDto): Observable<void> {
    return this.http.post<void>(endpoint + 'saveDoctor', doctor)
  }

  updateDoctor(doctor: DoctorDto): Observable<void> {
    return this.http.post<void>(endpoint + 'updateDoctor', doctor)
  }
}
