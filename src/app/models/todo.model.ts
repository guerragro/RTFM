// global model

export interface ProjectWorldInterface {
  id: number;
  project: string;
  tasks: ToDo[];
  view: boolean;
}

export class ProjectWorld {
  id: number;
  project: string;
  tasks: ToDo[];
  view: boolean;
  constructor(id, data) {
    this.id = id;
    this.project = data;
    this.tasks = [];
    this.view = false;
  }
}

export interface ToDo {
  id: number;
  todo: string;
  complete?: boolean;
  edit?: boolean;
}
export class ToDoWorld implements ToDo {
  id: number;
  todo: string;
  complete: boolean;
  edit: boolean;
  constructor(id: number, todo: string) {
    this.id = id;
    this.todo = todo;
    this.complete = false;
    this.edit = false;
  }
}
