import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'bass-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public userName: string = 'abc';
  public password: string = '123';
  constructor(private loginService: LoginService) {

  }

  public login() {
    this.loginService.login(this.userName, this.password).subscribe((r)=>{
      console.log(r);
    });
  }

}
