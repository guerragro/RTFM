import * as fromAction from './todo.action';
import {TODO_ACTION} from './todo.action';
import {Todo, TodoModel} from '../model/todo';

export interface TodoState {
  todos: TodoModel[];
  done: TodoModel[];
  delete: TodoModel[];
}

export const InitialTodosState: TodoState = {
  todos: [
    new Todo('HeroList', 0, false, false),
    new Todo('Axe', 1, false, false),
    new Todo('Rubick', 2, false, false),
  ],
  done: [],
  delete: []
};


export function TodoReducer(state = InitialTodosState, action: fromAction.Action) {
  switch (action.type) {
    // добавление
    case TODO_ACTION.ADD:
      const newTodo: TodoModel = action.payload;
      return {
        ...state, todos: [...state.todos, newTodo]
      };
    //  удаление
    case TODO_ACTION.DEL:
      const del = state.todos
                       .filter(t => t.id !== action.payload);
      return {
        ...state, todos: del
      };
    //  выполненные
    case TODO_ACTION.DONE:
      const doneTodo = state.todos
                            .find(t => (t.id === action.payload) ? t.done = true : false);
      const todo = state.todos
                        .filter(t => t.done === false);
      return {
        ...state, done: [...state.done, doneTodo], todos: todo
      };
    //  редактирование
    case TODO_ACTION.EDIT:
      console.log(action.payload);
      console.log(action.id);
      state.todos.filter(t => (t.id === action.id) ? t.todo = action.payload : state);
      // нужно поменять задачу, а не добавлять новую (использовать replace или удалить массив и вернуть новый)
      return state;
    default:
      return state;
  }
}
