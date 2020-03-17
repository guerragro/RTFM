import * as fromAction from './action';
import {Todo, ToDo} from '../model/todo';

export interface ToDoState {
  todo: ToDo[];
  complete: ToDo[];
  delete: ToDo[];
}

export const InitialTodosState: ToDoState = {
  todo: [
    new Todo('Изменить ', 0, false, false),
    new Todo('Добавить счетчик активных задач', 1, false, false),
    new Todo('Поправить структуру', 2, false, false),
  ],
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
    case fromAction.TODO_ACTION.TODO_DEL:
      const del = state.todo
                       .filter(t => t.id !== action.payload);
      return {
        ...state, todo: del
      };
    case fromAction.TODO_ACTION.TODO_DONE:
      const completeTodo = state.todo
                            .find(t => (t.id === action.payload) ? t.complete = true : false);
      return {
        ...state, complete: [...state.complete, completeTodo], todos: todo
      };
    case fromAction.TODO_ACTION.TODO_EDIT:
      console.log(action.payload);
      console.log(action.id);
      state.todo.filter(t => (t.id === action.id) ? t.todo = action.payload : state);
      return state;
    default:
      return state;
  }
}
