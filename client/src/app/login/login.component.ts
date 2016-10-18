import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'bass-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 public userName : string='abc';
 public password : string='123';
  constructor(private http: Http) {

   }

  ngOnInit() {
  }
  public login(){
    console.log(this.userName);
    console.log(this.password);
    this.http.get("http://localhost:3000/api/login")
    .subscribe(r=> console.log(r));
  }

}
