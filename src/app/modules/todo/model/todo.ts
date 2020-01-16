export interface TodoModel {
  todo: string;
  id: number;
  done: boolean;
  visible: boolean;
}

export class Todo {
  todo: string;
  id: number;
  done: boolean;
  visible: boolean;
  constructor(todo: string, id: number, done: boolean, visible: boolean) {
    this.todo = todo;
    this.id = id;
    this.done = done;
    this.visible = visible;
  }
}
