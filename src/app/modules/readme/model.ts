export interface ProjectInterface {
  project: string;
  task: string[];
  view: boolean;
  done?: boolean;
}

export interface ProjectIDInterface {
  id: [ProjectInterface];
}

// {
//  {id: [project]},
//  {id: [project]}
// }
