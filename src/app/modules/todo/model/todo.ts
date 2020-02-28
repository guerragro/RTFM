export interface TodoModel {
  todo: string;
  id: number;
  done: boolean;
  edit: boolean;
}

export class Todo {
  todo: string;
  id: number;
  done: boolean;
  edit: boolean;
  constructor(todo: string, id: number, done: boolean, edit: boolean) {
    this.todo = todo;
    this.id = id;
    this.done = done;
    this.edit = edit;
  }
}
