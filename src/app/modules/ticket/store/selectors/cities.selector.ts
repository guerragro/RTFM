import { AppState } from '../states/app.state';
import { CitiesState } from '../states/cities.state';
import { createSelector } from '@ngrx/store';

const selectCities = (state: AppState) => state.cities;

export const selectCitiesList = createSelector(
  selectCities,
  (state: CitiesState) => state.city
);

// Старое
// import * as fromReducer from './search.reducer';
// import { ActionReducer, ActionReducerMap, createSelector, MetaReducer, createFeatureSelector } from '@ngrx/store';
//
// // получаем состояние из редьюсера
// export interface State {
//   tickets: fromReducer.State;
// }
// export const reducer: ActionReducerMap<State> = {
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
// // export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
// //   return function (state: State, action: any): State {
// //     console.log('state', state);
// //     console.log('action', action);
// //     return reducer(state, action);
// //   };
// // }
// //
// // export const metaReducers: MetaReducer<State>[] = [logger];
