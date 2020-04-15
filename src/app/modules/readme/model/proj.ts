export interface Project {
  id: number;
  project: string;
  tasks: ToDo[];
  view: boolean;
}

export class ProjectModel {
  id: number;
  project: string;
  tasks: ToDo[] = [];
  view: boolean = false;
  constructor(id, data) {
    this.id = id;
    this.project = data;
  }
}

export interface ToDo {
  id: number;
  todo: string;
  complete: boolean;
  edit: boolean;
}

export class ToDo {
  id: number;
  todo: string;
  // complete: boolean  = false;
  // edit: boolean = false;
  constructor(id: number, todo: string) {
    this.id = id;
    this.todo = todo;
    this.edit = false;
    this.complete = false;
  }
}
