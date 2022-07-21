import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "./user";
import * as bcrypt from "bcryptjs";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = sessionStorage.getItem('login-token')
    if (token != null && token.length > 0) {
      let jwtString = 'Bearer ' + token
      request = request.clone({headers: request.headers.set('Authorization', jwtString)});
    }
    return next.handle(request);
  }
}

export const loginInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true}
];
