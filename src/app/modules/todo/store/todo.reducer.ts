import * as fromAction from './todo.action';
import { TODO_ACTION } from './todo.action';
import {TodoModel} from '../component/model/todo';

export interface TodoState {
  todos: TodoModel;
}

export const InitialTodosState: TodoState = {
  todos: {
    todo: 'Сделать Todo-list',
    id: 0,
    done: false
  }
};

export function TodoReducer(state = InitialTodosState, action: fromAction.Action) {
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      // const newTodo: TodoState = action.payload;
      console.log(state.todos);
      return {
        ...state
      };
    case TODO_ACTION.DEL_TODO:
      return state;
    default:
      return state;
  }
}
