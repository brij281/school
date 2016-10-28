import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
   constructor(private http: Http) {

  }

  public login(userID : string, password : string):Observable<string> {
    return this.http.get("http://localhost:3000/api/login", {
      headers: new Headers({
        'x-auth': `${userID}:${password}`
      })
    })
    .map(r => r.text());
  }
}



