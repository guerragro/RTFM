import {CitiesStateInterface} from './cities.state';

export interface AppState {
  cities: CitiesStateInterface;
}

export const InitialAppState: AppState = {
  cities: null
};
