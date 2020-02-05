import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/test.action';
import {Observable} from 'rxjs';
import {TestStore} from '../../store/mobx.store';
import {fromMobx} from 'ngx-mobx';
import {NumberModel} from '../../model';
import {Service} from '../../service/service';
import {State} from '../../store/test.reducer';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  store: Store<State>;
  model = new NumberModel();

  error: any;

  constructor(
    public mobxStore: TestStore,
    public service: Service
  ) { }

  ngOnInit() {
    this.store.subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    // this.test$ = fromMobx(() => this.mobxStore.number);
    // this.test$.subscribe(res => this.test = res);
    // this.store.subscribe(
    //   res => console.log(res)
    // );
  }

  handleErr(ans) {
    this.error = ans;
    console.log(this.error['error']['text']);
  }

  upNumber() {
    this.mobxStore.upNumber();
    this.model = new NumberModel('1', ['2']);
    console.log(this.model);
    // this.store.dispatch ( new fromAction.add(this.test) );
  }

}
