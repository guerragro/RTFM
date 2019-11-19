import * as fromState from './todo.reducer';
import {TodoReducer, TodoState} from './todo.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface appTodosState {
  todos: TodoState;
}

export const todoReducer: ActionReducerMap<appTodosState> = {
  todos: TodoReducer
};
