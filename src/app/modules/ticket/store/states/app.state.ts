import {CitiesState} from './cities.state';

export interface AppTicketState {
  cities: CitiesState;
}

export const InitialAppState: AppTicketState = {
  cities: null
};
