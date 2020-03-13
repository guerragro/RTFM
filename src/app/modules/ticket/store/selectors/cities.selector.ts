import { AppState } from '../states/app.state';
import { CitiesStateInterface } from '../states/cities.state';
import { createSelector } from '@ngrx/store';

const selectCities = (state: AppState) => state.cities;

export const selectCitiesList = createSelector(
  selectCities,
  (state: CitiesStateInterface) => state.city
);

// Старое
// import * as fromReducer from './search.reducers';
// import { ActionReducer, ActionReducerMap, createSelector, MetaReducer, createFeatureSelector } from '@ngrx/store';
//
// // получаем состояние из редьюсера
// export interface State {
//   tickets: fromReducer.State;
// }
// export const reducers: ActionReducerMap<State> = {
//   tickets: fromReducer.ticketReducer
// };
//
// // tickets относится к export interface State
// export const getTicketState = createFeatureSelector<fromReducer.State>('tickets');
//
// // для получения состояния по городам
// export const getStateCities = createSelector(
//   getTicketState,
//   fromReducer.getStateCities
// );
// export const getStateTicket = createSelector(
//   getTicketState,
//   fromReducer.getStateTicket
// );
// export const getStateSpecial = createSelector(
//   getTicketState,
//   fromReducer.getStateSpecial
// );
//
// // export function logger(reducers: ActionReducer<State>): ActionReducer<State> {
// //   return function (states: State, actions: any): State {
// //     console.log('states', states);
// //     console.log('actions', actions);
// //     return reducers(states, actions);
// //   };
// // }
// //
// // export const metaReducers: MetaReducer<State>[] = [logger];
