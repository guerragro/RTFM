export interface TodoInterface {
  todo: string;
  id?: number;
  complitle?: boolean;
}

export interface TodoDoneIntarface {
  todo: string;
  id: number;
  complitle: boolean;
}
export const Todo: TodoInterface = {
  todo: null
};
// export class Todo {
//   todo: string;
//   id: number;
//   complitle: boolean;
//
//   constructor(todo, id, complitle) {
//     this.todo = todo;
//     this.id = id;
//     this.complitle = complitle;
//   }
// }
