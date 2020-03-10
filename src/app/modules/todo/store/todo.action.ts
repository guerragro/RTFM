import { Action } from '@ngrx/store';
import {ToDo} from '../model/todo';

export enum TODO_ACTION {
  ADD = 'ADD',
  DEL = 'DEL',
  DONE = 'DONE',
  EDIT = 'EDIT'
}

export class addTodo implements Action {
  readonly type = TODO_ACTION.ADD;
  constructor( public payload: ToDo ) {
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
export class editTodo implements Action {
  readonly type = TODO_ACTION.EDIT;
  constructor(public payload: string, public id: number) {}
}

export type Action = addTodo | delTodo | doneTodo | editTodo;
