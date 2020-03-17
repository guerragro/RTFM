import * as fromAction from './action';
import {ToDo} from '../model/todo';

export interface ToDoState {
  id: number;
  todo: ToDo[];
  complete: ToDo[];
  delete: ToDo[];
}

export const InitialTodosState: ToDoState = {
  id: 1,
  todo: null,
  complete: null,
  delete: null,
};

export function todoReducer(state = InitialTodosState, action: fromAction.TodoType) {
  switch (action.type) {
    case fromAction.TODO_ACTION.TODO_GET_SUCCESS:
      return {
        ...state, todo: action.payload
      };
    case fromAction.TODO_ACTION.TODO_ADD:
      const todo = [...state.todo, action.payload];
      return {
        ...state, todo
      };
    case fromAction.TODO_ACTION.TODO_REMOVE:
      const remove = state.todo
                          .filter(t => t.id !== action.payload);
      console.log(remove);
      return {
        ...state, todo: remove
      };
    case fromAction.TODO_ACTION.TODO_DONE:
      const complete = state.todo.find(t => {
        if (t.id === action.payload) {
          return t.complete = true;
        }
      });
      return {
        ...state, complete: [...state.complete, complete]
      };
    case fromAction.TODO_ACTION.TODO_EDIT:
      state.todo.filter(t => {
        if (t.id === action.id) {
          return t.todo = action.payload;
        }
      });
      return state;
    default:
      return state;
  }
}
// https://palantir.github.io/tslint/rules/no-shadowed-variable/
