import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-glucose-charts',
  templateUrl: './glucose-charts.component.html',
  styleUrls: ['./glucose-charts.component.scss']
})
export class GlucoseChartsComponent implements OnInit {
  data: any;
  patientName = 'Donciu Maria'
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.data = {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
      datasets: [
        {
          label: 'Maximal accepted value',
          data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          fill: false,
          borderColor: '#8B0000'
        },
        {
          label: 'Actual value',
          data: [3.8, 3.4, 5.0, 4.1, 3, 4, 5, 6, 6, 6, 6, 7, 7, 4, 3, 4, 5, 6, 6, 6, 6, 7, 5, 5, 4],
          fill: false,
          borderColor: '#228B22'
        }
      ]
    }
  }
  selectData(event) {
    this.messageService.add({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }
}
