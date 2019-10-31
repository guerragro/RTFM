import { Action } from '@ngrx/store';

export enum CITIES_ACTION {
  ADD_CITIES = 'ADD_CITIES',
  ADD_CITIES_OK = 'ADD_CITIES_OK',
  ADD_CITIES_ERR = 'ADD_CITIES_ERR'
}

export class addCities implements Action {
  readonly type = CITIES_ACTION.ADD_CITIES;
}
export class addCitiesOk implements Action {
  readonly type = CITIES_ACTION.ADD_CITIES_OK;
  constructor( public payload: []) {
    console.log(this.payload);
  }
}
export class addCitiesErr implements Action {
  readonly type = CITIES_ACTION.ADD_CITIES_ERR;
  constructor( public payload: any) {}
}

export type Action = addCities | addCitiesOk | addCitiesErr;
