export interface ToDo {
  todo: string;
  id: number;
  complete: boolean;
  edit: boolean;
}

export class Todo {
  todo: string;
  id: number;
  complete: boolean;
  edit: boolean;
  constructor(todo: string, id: number, complete: boolean, edit: boolean) {
    this.todo = todo;
    this.id = id;
    this.complete = complete;
    this.edit = edit;
  }
}
