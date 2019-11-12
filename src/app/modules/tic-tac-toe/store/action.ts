import {Action} from '@ngrx/store';

export enum ACTION {
  ADD = 'ADD',
  DELETE = 'DELETE'
}

export class add implements Action {
  readonly type = ACTION.ADD;
  constructor( public payload: string) {}
}

export class deleteMove implements Action {
  readonly type = ACTION.DELETE;
  constructor( public payload: string) {}
}

export type Action = add | deleteMove;
