export interface TodoModel {
  todo: string;
  id: number;
  done: boolean;
}

export class Todo {
  todo: string;
  id: number;
  done: boolean;
  constructor(todo: string, id: number, done: boolean) {
    this.todo = todo;
    this.id = id;
    this.done = done;
  }
}
