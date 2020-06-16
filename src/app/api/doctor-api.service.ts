import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorDto } from '../shared/models/DoctorDto';
import { DoctorScheduleDto } from '../doctor/model/DoctorScheduleDto';
const endpoint = 'http://localhost:8080/api/doctor/';
@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {

  constructor(private http: HttpClient) { }

  getDoctorNameAndLastname(id: number): Observable<string> {
    return this.http.get<string>(endpoint + 'getDoctorNameAndLastname?id=' + id, { responseType: 'text' as 'json' })
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

  getScheduleForDoctor(id: number): Observable<DoctorScheduleDto> {
    return this.http.get<DoctorScheduleDto>(endpoint + 'getScheduleForDoctor?id=' + id)
  }

  saveSchedule(schedule: DoctorScheduleDto): Observable<void> {
    return this.http.post<void>(endpoint + 'saveSchedule', schedule)
  }
}
