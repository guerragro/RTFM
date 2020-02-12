export interface ProjectInterface {
  // id: number;
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
