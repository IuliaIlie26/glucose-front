import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvestigationsTicketDto } from '../shared/models/InvestigationsTicketDto';
const endpoint = 'http://localhost:8080/api/investigations/';
@Injectable({
    providedIn: 'root'
})
export class InvestiagationsApiService {
    constructor(private http: HttpClient) { }

    public getInvestigationTicket(consultationId: string): Observable<InvestigationsTicketDto> {
        return this.http.get<InvestigationsTicketDto>(endpoint + 'getInvestigationTicket?consultationId=' + consultationId);
    }

    public saveInvestigationTicket(ticket: InvestigationsTicketDto): Observable<void> {
        return this.http.post<void>(endpoint + 'saveInvestigationTicket', ticket);
    }
}