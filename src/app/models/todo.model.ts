// global model

export interface ProjectWorldInterface {
  id: number;
  project: string;
  tasks: ToDoWorldInterface[];
  view: boolean;
}

export class ProjectWorld {
  id: number;
  project: string;
  tasks: ToDoWorldInterface[];
  view: boolean;
  constructor(id, data) {
    this.id = id;
    this.project = data;
    this.tasks = [];
    this.view = false;
  }
}

export interface ToDoWorldInterface {
  id?: number;
  task?: string;
  done?: boolean;
  edit?: boolean;
}
export class ToDoWorld implements ToDoWorldInterface{
  id: number;
  task: string;
  done: boolean;
  edit: boolean;
  constructor(id, task) {
    this.id = id;
    this.task = task;
    this.done = false;
    this.edit = false;
  }
}
