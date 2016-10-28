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
  public response: any = 'zxc';
  constructor(private loginService: LoginService) {

  }

  public login() {
    var res = this.loginService.login(this.userName, this.password);
    res.subscribe((s)=>{
      console.log(s);
      this.response = s;
    },(err) =>{
      this.response=err;
    }
    );
    
  }

}
