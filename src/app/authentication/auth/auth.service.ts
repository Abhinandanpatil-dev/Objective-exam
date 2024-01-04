import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environment'
import { Observable, map } from 'rxjs';

@Injectable()
export class AuthService {
    token: any;
    constructor(private http: HttpClient) {

    }

    authUser(userData: any): Observable<any> {
        return this.http.post<any>(environment.baseUrl + 'auth/login', userData, { observe: 'response' }).pipe(map((res: any) => {
            const data = res;
            this.token = res.body.token;
            let body = res['body']
            if (body) {
                sessionStorage.setItem('token', this.token);

                let sessionData = Object.assign(body, {});
                sessionStorage.setItem('currentUser', JSON.stringify({ Id: sessionData.id }))
            }
        }))
    }

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('currentUser');
    }
}