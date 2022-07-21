import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Message} from "./message";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  receive(): Observable<Message> {
    return this.http.get<Message>("http://localhost:8080/user")

  }
}
