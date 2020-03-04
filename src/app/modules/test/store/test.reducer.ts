// import * as fromAction from '../store/test.actions';
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
// export function testReducer(states = InitialState, actions: fromAction.Action) {
//   switch (actions.type) {
//     case fromAction.TestAction.ADD:
//       return states;
//     default:
//       return states;
//   }
// }
//
// export const reducers: ActionReducerMap<AppState> = {
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



