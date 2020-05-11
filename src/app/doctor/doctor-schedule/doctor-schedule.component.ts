import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorApiService } from 'src/app/api/doctor-api.service';
import { DoctorScheduleDto } from '../model/DoctorScheduleDto';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { daysOfWeek } from '../../shared/models/days-of-week.model';
import { Subscription } from 'rxjs';
import { DailyScheduleDto } from '../model/DailyScheduleDto';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private doctorApi: DoctorApiService, private toastr: ToastrService, private translateService: TranslateService) { }

  languageSubscription: Subscription;
  doctorId: string;
  editMode = false;
  fullName = '';
  daysOfWeek: Array<any>;
  doctorSchedule: DoctorScheduleDto;
  weeklySchedule: Array<DailyScheduleDto> = [
    { dayOfWeek: 1, start: '', end: '' },
    { dayOfWeek: 2, start: '', end: '' },
    { dayOfWeek: 3, start: '', end: '' },
    { dayOfWeek: 4, start: '', end: '' },
    { dayOfWeek: 5, start: '', end: '' },
    { dayOfWeek: 6, start: '', end: '' },
    { dayOfWeek: 7, start: '', end: '' }]


  ngOnInit() {
    this.doctorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.doctorApi.getDoctorNameAndLastname(+this.doctorId).subscribe(name => this.fullName = name);
    this.doctorApi.getScheduleForDoctor(+this.doctorId).subscribe(schedule => {
      this.doctorSchedule = schedule;
      if (this.doctorSchedule.schedule.length == 7) {
        this.weeklySchedule = this.doctorSchedule.schedule;
      }
    })
    this.daysOfWeek = daysOfWeek[this.translateService.defaultLang];
    this.languageSubscription = this.translateService.onLangChange.subscribe(event => this.translateDaysOfWeek(event.lang))
  }


  onEdit() {
    this.editMode = true;
  }

  saveSchedule() {

    if (this.weeklySchedule.find(day => (day.start == '' && day.end != '') || (day.end == '' && day.start != ''))) {
      this.toastr.error(this.translateService.instant('doctor.schedule.error.start.end.required'))
    }
    else if (this.weeklySchedule.find(day => day.start > day.end)) {
      this.toastr.error(this.translateService.instant('doctor.schedule.error.start.after.end'))
    }
    else {
      this.doctorSchedule.schedule = this.weeklySchedule;
      this.doctorApi.saveSchedule(this.doctorSchedule).subscribe(() => {
        this.toastr.success(this.translateService.instant('buttons.success'));
        this.editMode = false;
      })
    }
  }

  cancel() {
    this.editMode = false;
  }

  getDay(iterator) {
    return this.daysOfWeek.find(e => e.value == iterator + 1).label;
  }

  translateDaysOfWeek(lang) {
    this.daysOfWeek = daysOfWeek[lang];
  }

  isDayOf(dayOfWeek: number) {
    const dailySchedule = this.weeklySchedule.find(e => e.dayOfWeek == dayOfWeek + 1);
    return dailySchedule && dailySchedule.start == '' && dailySchedule.end == '';
  }

  ngOnDestroy() {
    if (this.languageSubscription) this.languageSubscription.unsubscribe();
  }
}
