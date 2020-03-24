import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpClient
  ) { }

  validateLogin(user: any) {
    return this.http.post('/api/user/login', {
      username: user.username,
      password: user.password
    });
  }
}
