import {todoReducer, ToDoState} from '../../store/test.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface ApplicationState {
  todos: ToDoState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  todos: todoReducer
};
