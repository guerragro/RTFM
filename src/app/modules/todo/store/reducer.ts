import * as fromAction from './action';
import {TODO_ACTION} from './action';
import {Todo, ToDo} from '../model/todo';

export interface ToDoState {
  todo: ToDo[];
  done: ToDo[];
  delete: ToDo[];
}

export const InitialTodosState: ToDoState = {
  todo: [
    new Todo('Изменить ', 0, false, false),
    new Todo('Добавить счетчик активных задач', 1, false, false),
    new Todo('Поправить структуру', 2, false, false),
  ],
  done: null,
  delete: null,
};

export function todoReducer(state = InitialTodosState, action: fromAction.TodoType) {
  switch (action.type) {
    case TODO_ACTION.TODO_ADD:
      const todo = [...state.todo, action.payload];
      return {
        ...state, todo
      };
    case TODO_ACTION.TODO_DEL:
      const del = state.todo
                       .filter(t => t.id !== action.payload);
      return {
        ...state, todo: del
      };
    case TODO_ACTION.TODO_DONE:
      const doneTodo = state.todo
                            .find(t => (t.id === action.payload) ? t.done = true : false);
      // const todo = state.todo
      //                   .filter(t => t.done === false);
      return {
        ...state, done: [...state.done, doneTodo], todos: todo
      };
    case TODO_ACTION.TODO_EDIT:
      console.log(action.payload);
      console.log(action.id);
      state.todo.filter(t => (t.id === action.id) ? t.todo = action.payload : state);
      // нужно поменять задачу, а не добавлять новую (использовать replace или удалить массив и вернуть новый)
      return state;
    default:
      return state;
  }
}
