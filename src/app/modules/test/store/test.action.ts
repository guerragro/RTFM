import {Action} from '@ngrx/store';

export enum TODO_ACTION {
  ADD = 'ADD',
  DELETE = 'DELETE',
  EDIT = 'EDIT'
}

export class addTodo implements Action {
  readonly type = TODO_ACTION.ADD;
  constructor(public payload: any) {
  }
}

export class editTodo implements Action {
  readonly type = TODO_ACTION.EDIT;
  constructor(public payload: any) {
  }
}

export class deleteTodo implements Action {
  readonly type = TODO_ACTION.DELETE;
  constructor(public payload: any) {
  }
}

export type TodoAction = addTodo | editTodo | deleteTodo;
