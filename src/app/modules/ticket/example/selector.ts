// import { IAppState } from '../states/app.states';
// import { createSelector } from '@ngrx/store';
// import { IMenuState } from '../states/menu.states';
// // получаем все состояние
// const selectMenus = (states: IAppState) => states.menus;
// // получаем отдельное состояние
// export const selectMenuList = createSelector(
//   selectMenus,
//   (states: IMenuState) => states.menus
// );
//
// export const selectActiveMenuList = createSelector(
//   selectMenus,
//   (states: IMenuState) => states.menus.filter(menu => menu.status_active)
// );
//
// export const selectSelectedMenu = createSelector(
//   selectMenus,
//   (states: IMenuState) => states.selectedMenu
// );
//
// export const selectInProgress = createSelector(
//   selectMenus,
//   (states: IMenuState) => states.inProgress
// );
