import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { PanelModule, InputTextModule, AccordionModule, DropdownModule, CalendarModule } from 'primeng';
import { FormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from './directive/numbers-only.directive';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';

@NgModule({
    declarations: [
        HomeComponent,
        PatientFormComponent,
        NumbersOnlyDirective,
        DoctorFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        InputTextModule,
        PanelModule,
        AccordionModule,
        DropdownModule,
        CalendarModule,
        FormsModule
    ],
    exports: [
        HomeComponent,
        PatientFormComponent,
        NumbersOnlyDirective,
        DoctorFormComponent
    ]
})
export class SharedModule { }
