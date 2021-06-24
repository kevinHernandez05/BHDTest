import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/model/login.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  login(){
    let user: ILogin = {
      username: "bhdleon",
      password: "bhdleon"
    };
    this.auth.login(user);
  }

}
