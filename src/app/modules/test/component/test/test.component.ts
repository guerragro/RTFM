import { Component, OnInit } from '@angular/core';
import {AppState, State} from '../../store/test.reducer';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/test.action';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: any;
  store: Store<AppState>;

  constructor(
  ) { }

  ngOnInit() {
    this.store.subscribe(
      res => console.log(res)
    );
  }

  add() {
    this.store.dispatch ( new fromAction.add(this.test) );
  }

}
