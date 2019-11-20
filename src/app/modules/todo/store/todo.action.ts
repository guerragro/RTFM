import { Action } from '@ngrx/store';
import {TodoModel} from '../component/model/todo';

export enum TODO_ACTION {
  ADD = 'ADD',
  DEL = 'DEL',
  DONE = 'DONE'
}

export class addTodo implements Action {
  readonly type = TODO_ACTION.ADD;
  constructor( public payload: TodoModel ) {
  }
}
export class doneTodo implements Action {
  readonly type = TODO_ACTION.DONE;
  constructor(public payload: number) {}
}
export class delTodo implements Action {
  readonly type = TODO_ACTION.DEL;
  constructor( public payload: number) {}
}

export type Action = addTodo | delTodo | doneTodo;
