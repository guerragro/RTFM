// import {Action} from '@ngrx/store';
//
// export enum TestAction {
//   ADD = 'ADD'
// }
//
// export class add implements Action {
//   readonly type = TestAction.ADD;
//   constructor( public payload: string) {}
// }
//
// export type Action = add;

import {Action} from '@ngrx/store';

export enum TestAction {
  ADD = 'ADD'
}

export class add implements Action {
  readonly type = TestAction.ADD;
  constructor(public payload: any) {
  }
}

export type Action = add;
