import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SensorDistributionApiService } from 'src/app/api/sensor-distribution-api.service';
import { GlycemiaValuesDto } from 'src/app/shared/models/GlycemiaValuesDto';
import { ActivatedRoute } from '@angular/router';
import { PatientApiService } from 'src/app/api/patient-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-glucose-charts',
  templateUrl: './glucose-charts.component.html',
  styleUrls: ['./glucose-charts.component.scss']
})
export class GlucoseChartsComponent implements OnInit {

  data: any;
  dataPie: any;
  patientName = ''
  patientId: number;
  glycemiaValues: GlycemiaValuesDto[] = [];
  constructor(private messageService: MessageService, private sensorApi: SensorDistributionApiService, private activatedRoute: ActivatedRoute, private patientApi: PatientApiService, private _location: Location) { }

  ngOnInit() {
    this.patientId = +this.activatedRoute.snapshot.paramMap.get('patientId');
    this.patientApi.getPatientById(this.patientId).subscribe(res => this.patientName = res.lastname + ' ' + res.name)

    this.sensorApi.getGlycemiaForPatient(this.patientId).subscribe(values => {
      this.glycemiaValues = values;
      this.populateCharts();
    });
  }


  private populateCharts() {
    let above = 0;
    let ok = 0;
    let timeStampList = [];
    let valuesList = [];
    let maxVal = [];
    this.glycemiaValues.forEach(glycemia => {
      timeStampList.push(glycemia.timestamp);
      valuesList.push(glycemia.value);
      maxVal.push('8');

      if (+glycemia.value > 8.0) {
        above += 1;
      } else {
        ok += 1;
      }

    });

    this.dataPie = {
      labels: ['Ok','Above'],
      datasets: [
          {
              data: [ok, above],
              backgroundColor: [
                  "#228B22",
                  "#8B0000"
              ],
              hoverBackgroundColor: [
                "#228B22",
                "#8B0000"
              ]
          }]    
      };

    this.data = {
      labels: timeStampList,
      datasets: [
        {
          label: 'Maximal accepted value',
          data: maxVal,
          fill: false,
          borderColor: '#8B0000'
        },
        {
          label: 'Actual value',
          data: valuesList,
          fill: false,
          borderColor: '#228B22'
        }
      ]
    };
  }

  selectData(event) {
    this.messageService.add({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }

  cellColour(value){
    if(+value>8.0){
    }
  }

  back() {
  
    this._location.back();
  }
}
