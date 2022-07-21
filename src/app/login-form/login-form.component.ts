import {Component, OnInit} from '@angular/core';
import {JWT, User} from "../user";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = new User();

  errorMsg = ""

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.clear()
  }

  login() {
    this.loginService.login(this.user).subscribe({
      next: (jwt: JWT) => {
        sessionStorage.setItem('login-user', JSON.stringify(jwt.user))
        sessionStorage.setItem('login-token',jwt.token)
        this.router.navigateByUrl('user')
      },
      error:
        (err) => this.errorMsg = 'login failed'
    })
  }

  register() {
    this.loginService.register(this.user).subscribe({
      next: (user: User) => {
        this.router.navigateByUrl('login')
      },
      error:
        (err) => this.errorMsg = 'can not register'
    })
  }
}
