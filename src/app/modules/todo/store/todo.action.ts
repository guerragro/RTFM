import { Action } from '@ngrx/store';

export enum TODO_ACTION {
  ADD_TODO = 'ADD_TODO',
  DEL_TODO = 'DEL_TODO'
}

export class addTodo implements Action {
  readonly type = TODO_ACTION.ADD_TODO;
  constructor( public payload: object ) {
  }
}
export class delTodo implements Action {
  readonly type = TODO_ACTION.DEL_TODO;
  constructor( public payload: number) {}
}

export type Action = addTodo | delTodo;
