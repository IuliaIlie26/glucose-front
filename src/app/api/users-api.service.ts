import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../shared/models/UserDto';
const endpoint = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  login(dto: UserDto): Observable<string> {
    return this.http.post<string>(endpoint + 'login', dto, { responseType: 'text' as 'json' })
  }

  getAdminNameById(username: string): Observable<string> {
    return this.http.get<string>(endpoint + 'getAdminNameById?username=' + username, { responseType: 'text' as 'json' })
  }

}
