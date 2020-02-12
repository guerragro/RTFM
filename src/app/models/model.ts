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
}
