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
export class getTodo implements Action {
  readonly type = TODO_ACTION.TODO_GET;
}
export class getTodoSuccess implements Action {
  readonly type = TODO_ACTION.TODO_GET_SUCCESS;
  constructor(public payload: any) {}
}
export class addTodo implements Action {
  readonly type = TODO_ACTION.TODO_ADD;
  constructor( public payload: ToDo ) {}
}
export class doneTodo implements Action {
  readonly type = TODO_ACTION.TODO_DONE;
  constructor(public payload: ToDo) {}
}
export class removeTodo implements Action {
  readonly type = TODO_ACTION.TODO_REMOVE;
  constructor( public payload: ToDo) {}
}
export class editTodo implements Action {
  readonly type = TODO_ACTION.TODO_EDIT;
  constructor(public payload: ToDo) {}
}

export type TodoType = getTodo | getTodoSuccess | addTodo | removeTodo | doneTodo | editTodo;
