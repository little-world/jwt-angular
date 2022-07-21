import { Injectable } from '@angular/core';
import {JWT, User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<JWT> {
    return this.http.post<JWT>("http://localhost:8080/login", user)

  }

  register(user: User) {
    return this.http.post<User>("http://localhost:8080/register", user)
  }
}
