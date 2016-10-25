import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {
   constructor(private http: Http) {

  }

  public login(userID : string, password : string) {
    return this.http.get("http://localhost:3000/api/login", {
      headers: new Headers({
        'x-auth': `${userID}:${password}`
      })
    });
  }
}



