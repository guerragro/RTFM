// предыдущая версия
// import {TICKET_ACTION} from './search.action';
// import * as fromAction from './search.action';
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
// // редьюсер это просто функция, которая берет action and states и выдает новое состоянии
// export function ticketReducer(states = InitialState, action: fromAction.Action) {
//   switch (action.type) {
//     case TICKET_ACTION.SPECIAL_TICKET:
//       return {
//         ...states, special: [...states.special, action.payload]
//       };
//     case TICKET_ACTION.SEARCH_TICKET_OK:
//       return {
//         ...states, search: [...states.search, action.payload]
//       };
//     case TICKET_ACTION.LOAD_CITIES_OK:
//       return {
//         ...states, cities: action.payload
//       };
//     default:
//       return states;
//   }
// }
//
// // Города
// // export function CitiesReducer(states = InitialState, action: fromAction.Action) {
// //   switch (action.type) {
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
// // export function TicketReducer(states = InitialState, action: fromAction.Action) {
// //   switch (action.type) {
// //     case TICKET_ACTION.SEARCH_TICKET_OK:
// //       return {
// //         // ...states, search: [states.search, action.payload]
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
