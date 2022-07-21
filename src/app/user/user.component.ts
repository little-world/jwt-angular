import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message = ""
  user = new User()

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {


  }

  receive() {
    let userOpt = sessionStorage.getItem('login-user')
    if (userOpt != null)
      this.user = JSON.parse(userOpt)

    this.userService.receive().subscribe({
      next: data => {
        this.message = data.text
      },
      error: err => this.message = "something is wrong"
    })
  }
}
