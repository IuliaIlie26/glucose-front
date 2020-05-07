import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { DoctorScheduleDto } from '../model/DoctorScheduleDto';
import { DailyScheduleDto } from '../model/DailyScheduleDto';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private doctorApi: DoctorApiService, private toastr: ToastrService, private translateService: TranslateService) { }

  monday: DailyScheduleDto = { dayOfWeek: 1, start: '', end: '' };
  tuesday: DailyScheduleDto = { dayOfWeek: 2, start: '', end: '' };
  wednesday: DailyScheduleDto = { dayOfWeek: 3, start: '', end: '' };
  thursday: DailyScheduleDto = { dayOfWeek: 4, start: '', end: '' };
  friday: DailyScheduleDto = { dayOfWeek: 5, start: '', end: '' };
  saturday: DailyScheduleDto = { dayOfWeek: 6, start: '', end: '' };
  sunday: DailyScheduleDto = { dayOfWeek: 7, start: '', end: '' };

  doctorId: string;
  editMode = false;
  fullName = ''

  ngOnInit() {
    this.doctorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.doctorApi.getDoctorNameAndLastname(+this.doctorId).subscribe(name => this.fullName = name);
    this.doctorApi.getScheduleForDoctor(+this.doctorId).subscribe(schedule => this.setSchedule(schedule))
  }

  private setSchedule(doctorSchedule) {
    const monday = doctorSchedule.schedule.find(e => e.dayOfWeek == 1);
    this.monday.start = monday && monday.start ? monday.start : '';
    this.monday.end = monday && monday.end ? monday.end : '';
    const tuesday = doctorSchedule.schedule.find(e => e.dayOfWeek == 2);
    this.tuesday.start = tuesday && tuesday.start ? tuesday.start : '';
    this.tuesday.end = tuesday && tuesday.end ? tuesday.end : '';
    const wednesday = doctorSchedule.schedule.find(e => e.dayOfWeek == 3);
    this.wednesday.start = wednesday && wednesday.start ? wednesday.start : '';
    this.wednesday.end = wednesday && wednesday.end ? wednesday.end : '';
    const thursday = doctorSchedule.schedule.find(e => e.dayOfWeek == 4);
    this.thursday.start = thursday && thursday.start ? thursday.start : '';
    this.thursday.end = thursday && thursday.end ? thursday.end : '';
    const friday = doctorSchedule.schedule.find(e => e.dayOfWeek == 5);
    this.friday.start = friday && friday.start ? friday.start : '';
    this.friday.end = friday && friday.end ? friday.end : '';
    const saturday = doctorSchedule.schedule.find(e => e.dayOfWeek == 6);
    this.saturday.start = saturday && saturday.start ? saturday.start : '';
    this.saturday.end = saturday && saturday.end ? saturday.end : '';
    const sunday = doctorSchedule.schedule.find(e => e.dayOfWeek == 7);
    this.sunday.start = sunday && sunday.start ? sunday.start : '';
    this.sunday.end = sunday && sunday.end ? sunday.end : '';
  }

  onEdit() {
    this.editMode = true;
  }

  saveSchedule() {

    let doctorSchedule= new DoctorScheduleDto();

    doctorSchedule.schedule.push(this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday, this.sunday);
    doctorSchedule.doctorId = +this.doctorId;
    this.doctorApi.saveSchedule(doctorSchedule).subscribe(() => {
      this.toastr.success(this.translateService.instant('buttons.success'));
      this.editMode = false;
    })
  }

  checkIfDayOff(dayOfWeek: number) {

    switch (dayOfWeek) {
      case 1: return this.monday.start == '' && this.monday.end == ''
      case 2: return this.tuesday.start == '' && this.tuesday.end == ''
      case 3: return this.wednesday.start == '' && this.wednesday.end == ''
      case 4: return this.thursday.start == '' && this.thursday.end == ''
      case 5: return this.friday.start == '' && this.friday.end == ''
      case 6: return this.saturday.start == '' && this.saturday.end == ''
      case 7: return this.sunday.start == '' && this.sunday.end == ''
      default: return false;
    }
  }
}
