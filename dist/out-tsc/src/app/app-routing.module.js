import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorHomeComponent } from './doctor-pages/doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
const routes = [
    { path: '', component: LoginComponent },
    { path: 'doctor-home', component: DoctorHomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map