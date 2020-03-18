import {ActionReducerMap} from '@ngrx/store';
import * as fromReducer from '../store/reducer';

export interface AppState {
  todos: fromReducer.ToDoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromReducer.todoReducer
};
