import {Action} from '@ngrx/store';

export enum SPECIAL_ACTION {
  ADD_SPECIAL = 'ADD_SPECIAL',
  ADD_SPECIAL_SUCCESS = 'ADD_SPECIAL_SUCCESS',
  ADD_SPECIAL_FAIL = 'ADD_SPECIAL_FAIL'
}

export class addSpecial implements Action {
  readonly type = SPECIAL_ACTION.ADD_SPECIAL;
}

export class addSpecialSuccess implements Action {
  readonly type = SPECIAL_ACTION.ADD_SPECIAL_SUCCESS;
  constructor(public payload: any) {
  }
}
export class addSpecialFail implements Action {
  readonly type = SPECIAL_ACTION.ADD_SPECIAL_FAIL;
  constructor(public payload: any) {
  }
}

export type SpecialAction = addSpecial | addSpecialSuccess | addSpecialFail;
