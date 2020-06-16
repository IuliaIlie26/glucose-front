import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorDistributionDto } from '../patients/model/SensorDistributionDto';
import { MessageDto } from '../shared/models/MessageDto';

const endpoint = 'http://localhost:8080/api/sensor-distribution/';

@Injectable({
    providedIn: 'root'
})
export class SensorDistributionApiService {

    constructor(private http: HttpClient) { }

    getSensorStatus(patientId: number): Observable<SensorDistributionDto> {
        return this.http.get<SensorDistributionDto>(endpoint + 'getSensorStatus?patientId=' + patientId)
    }

    assignSensor(dto: SensorDistributionDto): Observable<MessageDto> {
        return this.http.post<MessageDto>(endpoint + 'assignSensor', dto);
    }

    getSensorDistribution(): Observable<SensorDistributionDto[]> {
        return this.http.get<SensorDistributionDto[]>(endpoint + 'getSensorDistribution');
    }

    activateSensor(dto: SensorDistributionDto): Observable<SensorDistributionDto>{
        return this.http.post<SensorDistributionDto>(endpoint + 'activateSensor', dto);
    }

    deactivateSensor(dto: SensorDistributionDto): Observable<SensorDistributionDto>{
        return this.http.post<SensorDistributionDto>(endpoint + 'deactivateSensor', dto);
    }
}