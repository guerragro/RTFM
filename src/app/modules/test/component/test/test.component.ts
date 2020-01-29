import { Component, OnInit } from '@angular/core';
import {AppState, State} from '../../store/test.reducer';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/test.action';
import {Observable} from 'rxjs';
import {TestStore} from '../../store/mobx.store';
import {fromMobx} from 'ngx-mobx';
import {NumberModel} from '../../model';
import {Service} from '../../service/service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // test: any;
  store: Store<AppState>;
  test$;
  model = new NumberModel();
  loginText = 'Login';
  signUpText = 'Sign';
  lesson = ['session1', 'session2'];
  zik = false;
  new: any;

  error: any;

  constructor(
    public mobxStore: TestStore,
    public service: Service
  ) { }

  ngOnInit() {
    // this.test$ = fromMobx(() => this.mobxStore.number);
    // this.test$.subscribe(res => this.test = res);
    // this.store.subscribe(
    //   res => console.log(res)
    // );
    // this.test = [{name: 'Axe', age: 5}];
    // this.service.test().substring(
    //   (res: string) => console.log(res),
    //   err => console.log(err)
    // );
    // this.newFunction([1, 2, 3], 4);
    this.service.makeRequest().subscribe(
      res => console.log(res),
      err => this.handleErr(err)
    );
  }

  handleErr(ans) {
    this.error = ans;
    console.log(this.error['error']['text']);
  }

  newFunction(mas, numb) {
  }

  login() {
    console.log(this.loginText);
  }
  sign() {
    console.log(this.signUpText);
  }

  add() {
    // this.store.dispatch ( new fromAction.add(this.test) );
  }

  upNumber() {
    this.mobxStore.upNumber();
    this.model = new NumberModel('1', ['2']);
    console.log(this.model);
  }

}
