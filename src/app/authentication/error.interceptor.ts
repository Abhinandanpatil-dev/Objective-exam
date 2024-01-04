import { catchError } from "rxjs/operators";
import { AuthService } from "./auth/auth.service";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.logout();
            }
            const error = err.error.errorMessage || err.error.errorCode || err.error[0].errorMessage;
            throw (error);
        }))
    }

}