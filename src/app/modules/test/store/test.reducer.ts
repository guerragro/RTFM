// import {TodoAction} from './test.action';
//
// export interface State {
//   ids: number[];
//   todos: { [id: number]: Todo};
// }
// export interface Todo {
//   id: number;
//   todo: string;
//   edit: boolean;
// }
//
// export const InitialState: State = {
//   ids: [1, 2, 3],
//   todos: {
//     1:     {
//       id: 1,
//       todo: 'сделать store',
//       edit: false
//     },
//     2:     {
//       id: 2,
//       todo: 'правильно',
//       edit: false
//     }
//   }
//   // todos: [
//   //   {
//   //     id: 1,
//   //     todo: 'сделать store',
//   //     edit: false
//   //   },
//   //   {
//   //     id: 2,
//   //     todo: 'правильно',
//   //     edit: false
//   //   }
//   // ]
// };
//
// export function reducer(state = InitialState, action: TodoAction) {
//   switch (action.type) {
//     case 'ADD':
//       console.log(action);
//       break;
//     case 'DELETE':
//       console.log(action);
//       break;
//     default:
//       console.log(state);
//   }
// }
//
// export const getIds = (state: State) => state.ids;
// export const getTodos = (state: State) => state.todos;
