import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {TodoState} from '../../store/todo.reducer';
import {addTodo} from '../../store/todo.action';
import * as fromState from '../../store/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: string;

  constructor(
    private store: Store<fromState.TodoState>
  ) { }

  ngOnInit() {
    this.store.subscribe(
      res => console.log(res)
    );
  }

  addTodo() {
    console.log('hardTest');
    this.store.dispatch( new addTodo(this.todo));
  }

}
