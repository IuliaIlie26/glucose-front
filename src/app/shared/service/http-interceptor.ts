import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {

  constructor(private toasterService: ToastrService, private translateService: TranslateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.error) {
            let code = JSON.parse(err.error);
            this.toasterService.error(this.translateService.instant(code.errorCode));
          }
          else{
            this.toasterService.error(this.translateService.instant('backend.generic'))
          }

        }
        return of(err);
      }));

  }
}
