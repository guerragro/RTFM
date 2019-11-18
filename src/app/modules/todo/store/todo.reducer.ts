import * as fromAction from './todo.action';
import { TODO_ACTION } from './todo.action';
import { ActionReducerMap } from '@ngrx/store';
import {Todo, TodoInterface} from '../component/model/todo';

export interface TodoInterfaceState {
  todo: string;
  id?: number;
  complitle?: boolean;
}

export const InitialTodoState: TodoInterfaceState[] = [
];

export function TodoReducer(state = InitialTodoState, action: fromAction.Action) {
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return {
        ...state, todo: action.payload
      };
    case TODO_ACTION.DEL_TODO:
      return state;
    default:
      return state;
  }
}

// export const reducers: ActionReducerMap<TodoState, any> = {
//
// };

//   export const reducers: ActionReducerMap<State> = {
//   films: fromFilms.reducer
// };
