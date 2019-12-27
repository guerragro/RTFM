import {CitiesState} from './cities.state';

export interface AppTicketState {
  cities: CitiesState;
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
