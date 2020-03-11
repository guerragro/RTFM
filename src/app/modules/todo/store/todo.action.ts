import { Action } from '@ngrx/store';
import {ToDo} from '../model/todo';

export enum TODO_ACTION {
  TODO_ADD = 'TODO_ADD',
  TODO_DEL = 'TODO_DEL',
  TODO_DONE = 'TODO_DONE',
  TODO_EDIT = 'TODO_EDIT'
}

export class addTodo implements Action {
  readonly type = TODO_ACTION.TODO_ADD;
  constructor( public payload: ToDo ) {
  }
}
export class doneTodo implements Action {
  readonly type = TODO_ACTION.TODO_DONE;
  constructor(public payload: number) {}
}
export class delTodo implements Action {
  readonly type = TODO_ACTION.TODO_DEL;
  constructor( public payload: number) {}
}
export class editTodo implements Action {
  readonly type = TODO_ACTION.TODO_EDIT;
  constructor(public payload: string, public id: number) {}
}

export type TodoType = addTodo | delTodo | doneTodo | editTodo;
