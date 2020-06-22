import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { PanelModule, InputTextModule, AccordionModule, DropdownModule, CalendarModule, TableModule, ButtonModule, TooltipModule, CardModule } from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from './directive/numbers-only.directive';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
    declarations: [
        HomeComponent,
        PatientFormComponent,
        NumbersOnlyDirective,
        DoctorFormComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        InputTextModule,
        PanelModule,
        AccordionModule,
        DropdownModule,
        CardModule,
        CalendarModule,
        FormsModule,
        NgbModule,
        TableModule,
        ReactiveFormsModule,
        TooltipModule,
        ButtonModule,
        NgxPermissionsModule.forRoot()
    ],
    exports: [
        HomeComponent,
        PatientFormComponent,
        NumbersOnlyDirective,
        DoctorFormComponent
    ]
})
export class SharedModule { }
