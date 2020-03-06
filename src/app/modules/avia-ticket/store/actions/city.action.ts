import {Action} from '@ngrx/store';
import {CityInterface} from '../states/city.state';

export enum CITY_ACTION {
  ADD_CITY = 'ADD_CITY',
  ADD_CITY_OK = 'ADD_CITY_OK',
  ADD_CITY_ERR = 'ADD_CITY_ERR'
}

export class addCities implements Action {
  readonly type = CITY_ACTION.ADD_CITY;
}

export class addCitiesOk implements Action {
  readonly type = CITY_ACTION.ADD_CITY_OK;
  constructor(public payload: any) {
    console.log(payload);
  }
}
export class addCitiesErr implements Action {
  readonly type = CITY_ACTION.ADD_CITY_ERR;
  constructor(public payload: any) {}
}

export type Action = addCities | addCitiesOk | addCitiesErr;
