// import * as fromAction from '../store/test.action';
// import {ActionReducerMap} from '@ngrx/store';
//
// export interface AppState {
//   ids: State;
// }
//
// export interface State {
//   id: number;
// }
// export const InitialState: State = {
//   id: null,
// };
//
// export function testReducer(state = InitialState, action: fromAction.Action) {
//   switch (action.type) {
//     case fromAction.TestAction.ADD:
//       return state;
//     default:
//       return state;
//   }
// }
//
// export const reducer: ActionReducerMap<AppState> = {
//   ids: testReducer
// };

import {Action, TestAction} from './test.action';

export interface State {
  todo: string;
}

export const InitialState: State = {
  todo: 'FUCKYOU',
};

export function testReducer(state = InitialState, action: Action) {
  switch (action.type) {
    case TestAction.ADD:
      console.log(action.payload);
  }
}



