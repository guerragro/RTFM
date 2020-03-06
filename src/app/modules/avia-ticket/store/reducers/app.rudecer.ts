import {ActionReducerMap} from '@ngrx/store';
import {AppStateInterface} from '../states/app.state';
import {CityReducer} from './city.reducer';

export const appReducers: ActionReducerMap<AppStateInterface, any> = {
  city: CityReducer,
  // ticket:
};
