import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DoctorHomeComponent } from './doctor-pages/doctor-home/doctor-home.component';
import { LoginComponent } from './login/login.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            DoctorHomeComponent,
            LoginComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map