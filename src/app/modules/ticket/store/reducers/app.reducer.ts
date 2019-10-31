import { ActionReducerMap} from '@ngrx/store';
import { AppState } from '../states/app.state';
import { CitiesReducer } from './cities.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  cities: CitiesReducer
};
