import { Injectable} from '@angular/core';
 import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
 import { Observable } from 'rxjs';


 @Injectable()

 export class JwtInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = sessionStorage.getItem('token');

        if(token) {
            const cloned=req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            });
            return next.handle(cloned)
        }
        else {
            return next.handle(req)
        }
     }

 }

 