import {CitiesState} from './cities.state';

export interface AppState {
  cities: CitiesState;
}

export const InitialState: AppState = {
  cities: null
};
