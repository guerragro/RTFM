export interface TodoInterface {
  todo: string;
  id?: number;
  complitle?: boolean;
}

export class Todo {
  todo;
  id;
  complitle;

  constructor(todo, id, complitle) {
    this.todo = todo;
    this.id = id;
    this.complitle = complitle;
  }
}
