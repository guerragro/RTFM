
// import { Action } from '@ngrx/store';
// import { ICart } from '../../models/cart.interface';
//
// export enum ECartActions {
//   GetCart = '[Cart] Get Cart',
//   GetCartSuccess = '[Cart] Get Cart Success',
//   GetCartFailed = '[Cart] Get Cart Failed',
//   DeleteFromCart = '[Cart] Delete From Cart',
//   DeleteFromCartSuccess = '[Cart] Delete From Cart Success',
//   DeleteFromCartFailed = '[Cart] Delete From Cart Failed',
//   AddInCart = '[Cart] Add In Cart',
//   AddInCartSuccess = '[Cart] Add In Cart Success',
//   AddInCartFailed = '[Cart] Add In Cart Failed',
//   ClearCart = '[Cart] Clear Cart',
//   ClearCartSuccess = '[Cart] Clear Cart',
//   ClearCartFailed = '[Cart] Clear Cart Failed'
// }
//
// export class GetCart implements Action {
//   public readonly type = ECartActions.GetCart;
//   constructor(public payload: string) {}
// }
//
// export class GetCartSuccess implements Action {
//   public readonly type = ECartActions.GetCartSuccess;
//   constructor(public payload: ICart) {}
// }
//
// export class GetCartFailed implements Action {
//   public readonly type = ECartActions.GetCartFailed;
//   constructor(public payload: {}) {}
// }
//
// export class ClearCart implements Action {
//   public readonly type = ECartActions.ClearCart;
//   constructor(public payload: ICart) {}
// }
//
// export class ClearCartSuccess implements Action {
//   public readonly type = ECartActions.ClearCartSuccess;
// }
//
// export class ClearCartFailed implements Action {
//   public readonly type = ECartActions.ClearCartFailed;
//   constructor(public payload: {}) {}
// }
//
// export class DeleteFromCart implements Action {
//   public readonly type = ECartActions.DeleteFromCart;
//   constructor(public payload: string) {}
// }
//
// export class DeleteFromCartSuccess implements Action {
//   public readonly type = ECartActions.DeleteFromCartSuccess;
//   constructor(public payload: ICart) {}
// }
//
// export class DeleteFromCartFailed implements Action {
//   public readonly type = ECartActions.DeleteFromCartFailed;
//   constructor(public payload: {}) {}
// }
//
// export class AddInCart implements Action {
//   public readonly type = ECartActions.AddInCart;
//   constructor(public payload: ICart) {}
// }
//
// export class AddInCartSuccess implements Action {
//   public readonly type = ECartActions.AddInCartSuccess;
//   constructor(public payload: ICart) {}
// }
//
// export class AddInCartFailed implements Action {
//   public readonly type = ECartActions.AddInCartFailed;
//   constructor(public payload: {}) {}
//
// }
//
// export type CartActions = GetCartSuccess | GetCart | GetCartFailed | DeleteFromCart | DeleteFromCartSuccess |
//   DeleteFromCartFailed | AddInCart | AddInCartSuccess | AddInCartFailed | ClearCart | ClearCartSuccess | ClearCartFailed;
