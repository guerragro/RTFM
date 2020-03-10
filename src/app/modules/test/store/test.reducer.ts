import * as fromAction from '../store/test.action';
import { TODO_ACTION } from '../store/test.action';

export interface ToDo {
  id: number;
  todo: string;
  edit: boolean;
}

export interface ToDoState {
  todo: ToDo[];
}
export const initialState: ToDoState = {
  todo: [
    {
      id: 1,
      todo: 'hello world',
      edit: false
    }
  ]
};

export function todoReducer(state = initialState, action: fromAction.TodoAction) {
  switch (action.type) {
    case TODO_ACTION.ADD:
      console.log(action.payload);
      return state;
    case TODO_ACTION.DELETE:
      return state;
    case TODO_ACTION.EDIT:
      return state;
    default:
      return state;
  }
}
