import { Action } from '@ngrx/store';
import {ToDo} from '../model/todo';

export enum TODO_ACTION {
  TODO_GET = 'GET_TODO',
  TODO_GET_SUCCESS = 'TODO_GET_SUCCESS',
  TODO_ADD = 'TODO_ADD',
  TODO_REMOVE = 'TODO_REMOVE',
  TODO_DONE = 'TODO_DONE',
  TODO_EDIT = 'TODO_EDIT'
}
export class GETTODO implements Action {
  readonly type = TODO_ACTION.TODO_GET;
}
export class GETTODOSUCCESS implements Action {
  readonly type = TODO_ACTION.TODO_GET_SUCCESS;
  constructor(public payload: any) {}
}
export class ADDTODO implements Action {
  readonly type = TODO_ACTION.TODO_ADD;
  constructor( public payload: ToDo ) {}
}
export class DONETODO implements Action {
  readonly type = TODO_ACTION.TODO_DONE;
  constructor(public payload: ToDo) {}
}
export class REMOVETODO implements Action {
  readonly type = TODO_ACTION.TODO_REMOVE;
  constructor( public payload: ToDo) {}
}
export class EDITTODO implements Action {
  readonly type = TODO_ACTION.TODO_EDIT;
  constructor(public payload: ToDo) {}
}

export type TodoType = GETTODO | GETTODOSUCCESS | ADDTODO | REMOVETODO | DONETODO | EDITTODO;
