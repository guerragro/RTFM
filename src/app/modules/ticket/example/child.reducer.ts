// import { ICartState, initialCartState } from '../states/cart.states';
// import { ECartActions, CartActions } from '../actions/cart.actions';
//
// export const cartReducers = (
//   states = initialCartState,
//   action: CartActions
// ): ICartState => {
//   switch (action.type) {
//     case ECartActions.AddInCart:
//     case ECartActions.ClearCart:
//     case ECartActions.DeleteFromCart:
//     case ECartActions.GetCart:
//       return { ...states, inProgress: true };
//     case ECartActions.AddInCartFailed:
//     case ECartActions.ClearCartFailed:
//     case ECartActions.DeleteFromCartFailed:
//     case ECartActions.GetCartFailed:
//       return {...states, inProgress: false};
//     case ECartActions.AddInCartSuccess: {
//       return {
//         ...states,
//         cart: { ...states.cart, ...action.payload },
//         inProgress: false
//       };
//     }
//     case ECartActions.GetCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: action.payload
//       };
//     }
//     case ECartActions.ClearCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: initialCartState.cart
//       };
//     }
//     case ECartActions.DeleteFromCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: { ...states.cart, ...action.payload }
//       };
//     }
//     default:
//       return states;
//   }
// };

// отдельный редьюсер
// import { ICartState, initialCartState } from '../states/cart.states';
// import { ECartActions, CartActions } from '../actions/cart.actions';
//
// export const cartReducers = (
//   states = initialCartState,
//   action: CartActions
// ): ICartState => {
//   switch (action.type) {
//     case ECartActions.AddInCart:
//     case ECartActions.ClearCart:
//     case ECartActions.DeleteFromCart:
//     case ECartActions.GetCart:
//       return { ...states, inProgress: true };
//     case ECartActions.AddInCartFailed:
//     case ECartActions.ClearCartFailed:
//     case ECartActions.DeleteFromCartFailed:
//     case ECartActions.GetCartFailed:
//       return {...states, inProgress: false};
//     case ECartActions.AddInCartSuccess: {
//       return {
//         ...states,
//         cart: { ...states.cart, ...action.payload },
//         inProgress: false
//       };
//     }
//     case ECartActions.GetCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: action.payload
//       };
//     }
//     case ECartActions.ClearCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: initialCartState.cart
//       };
//     }
//     case ECartActions.DeleteFromCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: { ...states.cart, ...action.payload }
//       };
//     }
//     default:
//       return states;
//   }
// };
