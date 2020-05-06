import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { DoctorScheduleDto } from '../model/DoctorScheduleDto';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private doctorApi: DoctorApiService) { }

  isNotSet = false;
  doctorId: string;
  editMode = false;
  doctorSchedule: DoctorScheduleDto;

  ngOnInit() {
    this.doctorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.doctorApi.getScheduleForDoctor(+this.doctorId).subscribe(schedule => {
      this.doctorSchedule = schedule;
      if (!this.doctorSchedule.schedule.size) {
        this.isNotSet = true;
      }
    })
  }

  onEdit() {
    this.editMode = true;
  }

}
