import { ActionReducerMap} from '@ngrx/store';
import { AppTicketState } from '../states/app.state';
import { CitiesReducer } from './cities.reducer';

export const appReducers: ActionReducerMap<AppTicketState, any> = {
  cities: CitiesReducer
};
