import { Component, OnInit } from '@angular/core';
import {User} from '../../login-model';
import {LoginService} from '../../service/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    public service: LoginService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {}

  validateLogin() {
    if (this.user.username && this.user.password) {
      this.service.validateLogin(this.user).subscribe(
        res => this.handle(res),
        err => {
          alert('Нет ответа от сервера');
          console.log(err);
        }
      );
    } else {
      alert('Вы не ввели логин или пароль');
    }
  }
  handle(ans) {
    if (ans['status']) {
      console.log(ans);
      this.router.navigate(['menu'], {relativeTo: this.route.parent});
    } else {
      alert(ans['message']);
    }
  }
}
