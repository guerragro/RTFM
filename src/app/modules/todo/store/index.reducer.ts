import {todoReducer, ToDoState} from './reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  todos: ToDoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer
};
