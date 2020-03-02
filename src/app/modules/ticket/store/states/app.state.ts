import {CitiesStateInterface} from './cities.state';

export interface AppTicketState {
  cities: CitiesStateInterface;
}

export const InitialAppState: AppTicketState = {
  cities: null
};

// import {CitiesState} from './cities.state';

// export interface AppTicketState {
//
// }
//
// export const InitialAppState: AppTicketState = [];
