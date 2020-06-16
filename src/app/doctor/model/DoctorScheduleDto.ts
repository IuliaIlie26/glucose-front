import { DailyScheduleDto } from './DailyScheduleDto';

export class DoctorScheduleDto {
    doctorId: number;
    schedule: Array<DailyScheduleDto> = [];
}