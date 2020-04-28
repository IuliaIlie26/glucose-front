import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../commons/models/UserDto';
const endpoint = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  login(dto: UserDto): Observable<string> {
    return this.http.post<string>(endpoint + 'login', dto, { responseType: 'text' as 'json' })
  }
}