// global model

export interface ProjectWorldInterface {
  id: number;
  project: string;
  tasks: TaskInterface[];
  view: boolean;
}

export interface TaskInterface {
  id: number;
  task: string;
  done: boolean;
}

export class ProjectWorld {
  id: number;
  project: string;
  tasks: TaskInterface[];
  view: boolean;
  constructor(id, data) {
    this.id = id;
    this.project = data;
    this.tasks = [];
    this.view = false;
  }
}
export class TaskWorld {
  id: number;
  task: string;
  done: boolean;
  constructor(id, task) {
    this.id = id;
    this.task = task;
    this.done = false;
  }
}
