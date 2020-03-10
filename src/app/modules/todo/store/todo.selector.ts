import * as fromState from './todo.reducer';
import {TodoReducer, ToDoState} from './todo.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  todos: ToDoState;
}

export const todoReducer: ActionReducerMap<AppState> = {
  todos: TodoReducer
};
