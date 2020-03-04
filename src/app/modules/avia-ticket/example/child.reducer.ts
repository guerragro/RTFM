// import { ICartState, initialCartState } from '../states/cart.states';
// import { ECartActions, CartActions } from '../actions/cart.actions';
//
// export const cartReducers = (
//   states = initialCartState,
//   actions: CartActions
// ): ICartState => {
//   switch (actions.type) {
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
//         cart: { ...states.cart, ...actions.payload },
//         inProgress: false
//       };
//     }
//     case ECartActions.GetCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: actions.payload
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
//         cart: { ...states.cart, ...actions.payload }
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
//   actions: CartActions
// ): ICartState => {
//   switch (actions.type) {
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
//         cart: { ...states.cart, ...actions.payload },
//         inProgress: false
//       };
//     }
//     case ECartActions.GetCartSuccess: {
//       return {
//         ...states,
//         inProgress: false,
//         cart: actions.payload
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
//         cart: { ...states.cart, ...actions.payload }
//       };
//     }
//     default:
//       return states;
//   }
// };
