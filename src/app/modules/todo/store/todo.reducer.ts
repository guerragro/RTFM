import * as fromAction from './todo.action';
import { TODO_ACTION } from './todo.action';
import {Todo, TodoModel} from '../component/model/todo';

export interface TodoState {
  // days: string[];
  todos: TodoModel[];
}

export const InitialTodosState: TodoState = {
  // days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  todos: [
    new Todo('Сделать Todo-list', 0, false),
  ]
};

export function TodoReducer(state = InitialTodosState, action: fromAction.Action) {
  switch (action.type) {
    case TODO_ACTION.ADD:
      const newTodo: TodoModel = action.payload;
      console.log(state);
      return {
        ...state, todos: [...state.todos, newTodo]
      };
    case TODO_ACTION.DEL:
      return state;
    case TODO_ACTION.DONE:
      return state;
    default:
      return state;
  }
}
