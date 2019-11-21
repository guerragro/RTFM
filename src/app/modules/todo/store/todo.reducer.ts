import * as fromAction from './todo.action';
import { TODO_ACTION } from './todo.action';
import {Todo, TodoModel} from '../component/model/todo';

export interface TodoState {
  todos: TodoModel[];
  visible: TodoModel[];
}

export const InitialTodosState: TodoState = {
  todos: [
    new Todo('Сделать Todo-list', 0, false),
    new Todo('Удалить', 1, false),
    new Todo('Последний герой', 2, false),
  ],
  visible: []
};

export function TodoReducer(state = InitialTodosState, action: fromAction.Action) {
  switch (action.type) {
    case TODO_ACTION.ADD:
      const newTodo: TodoModel = action.payload;
      return {
        ...state, todos: [...state.todos, newTodo]
      };
    case TODO_ACTION.DEL:
      const del = state.todos
                       .filter(todo => todo.id !== action.payload);
      return {
        ...state, todos: del
      };
    case TODO_ACTION.DONE:
      const doneTodo = state.todos
                            .find(a => (a.id === action.payload) ? a.done = true : false);
      const todo = state.todos
                        .filter(a => a.done === false);
      console.log(doneTodo);
      return {
        ...state, visible: [...state.visible, doneTodo], todos: todo
      };
    default:
      return state;
  }
}
