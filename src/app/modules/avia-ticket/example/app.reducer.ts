// предыдущая версия
// import {TICKET_ACTION} from './search.actions';
// import * as fromAction from './search.actions';
// import { CitiesModel } from '../model/model';
// import {Action} from '@ngrx/store';
//
// // модель изначального изначальное состояние
// export interface State {
//   cities?: CitiesModel[];
//   search?: any;
//   special?: any[];
//   view: boolean;
// }
//
// const InitialState: State = {
//   // изначальное состояние
//   view: false,
//   search: []
// };
//
// // редьюсер это просто функция, которая берет actions and states и выдает новое состоянии
// export function ticketReducer(states = InitialState, actions: fromAction.Action) {
//   switch (actions.type) {
//     case TICKET_ACTION.SPECIAL_TICKET:
//       return {
//         ...states, special: [...states.special, actions.payload]
//       };
//     case TICKET_ACTION.SEARCH_TICKET_OK:
//       return {
//         ...states, search: [...states.search, actions.payload]
//       };
//     case TICKET_ACTION.LOAD_CITIES_OK:
//       return {
//         ...states, cities: actions.payload
//       };
//     default:
//       return states;
//   }
// }
//
// // Города
// // export function CitiesReducer(states = InitialState, actions: fromAction.Action) {
// //   switch (actions.type) {
// //     case TICKET_ACTION.LOAD_CITIES_OK:
// //       return {
// //         console.log('города успешно загружены')
// //       };
// //     case TICKET_ACTION.LOAD_CITIES_ERR:
// //       return {
// //         console.log('ERROR')
// //       }
// //   }
// // }
//
// // Поиск билетов
// // export function TicketReducer(states = InitialState, actions: fromAction.Action) {
// //   switch (actions.type) {
// //     case TICKET_ACTION.SEARCH_TICKET_OK:
// //       return {
// //         // ...states, search: [states.search, actions.payload]
// //       };
// //     case TICKET_ACTION.SEARCH_TICKET_ERR:
// //       return {
// //         console.log('ERROR')
// //       }
// //   }
// // }
// // Специальные предложения
//
// export const getStateCities = (states: State) => states.cities;
// export const getStateTicket = (states: State) => states.search;
// export const getStateSpecial = (states: State) => states.special;

// все редьюсеры
// import { ActionReducerMap } from '@ngrx/store';
// import { IAppState } from '../states/app.states';
// import { cartReducers } from './cart.reducers';
// import { menuReducers } from './menu.reducers';
// import { orderReducers } from './orders.reducers';
// import { orderedProductReducers } from './ordered-product.reducers';
// import { productReducers } from './product.reducers';
// import { subtypeReducers } from './subtype.reducers';
//
// export const appReducers: ActionReducerMap<IAppState, any> = {
//   cart: cartReducers,
//   menus: menuReducers,
//   orders: orderReducers,
//   orderedProducts: orderedProductReducers,
//   products: productReducers,
//   subtypes: subtypeReducers
// };
