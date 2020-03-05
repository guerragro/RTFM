import {CitiesStateInterface} from './cities.state';

export interface AppTicketState {
  cities: CitiesStateInterface;
}

export const InitialAppState: AppTicketState = {
  cities: null
};
