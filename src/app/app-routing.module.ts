import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/component/page-not-found/page-not-found.component';

// TODO почитать по routing
// https://favicon.tech/kak-sozdat-polnostranichnyj-veb-sajt-v-angular-chast-3-4/

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'Project', loadChildren: './modules/readme/readme.module#ReadMeModule'
  },
  {
    // Todo 70-80%
    path: 'todoList', loadChildren: './modules/todo/todo.module#TodoModule'
  },
  {
    // Todo 70-80%
    path: 'weatherService', loadChildren: './modules/weather/weather.module#WeatherModule'
  },
  {
    // Todo 70-80%
    path: 'tic-tac-toe', loadChildren: './modules/tic-tac-toe/tic-tac-toe.module#TicTacToeModule'
  },
  {
    // Todo, все на стадии зачатия
    path: 'ticketService', loadChildren: './modules/ticket/ticket.module#TicketModule'
  },
  {
    // Todo 70-80%
    path: 'calculator', loadChildren: './modules/calculator/calculator.module#CalculatorModule'
  },
  {
    path: 'Zen-wallet', loadChildren: './modules/zen-money/money.module#MoneyModule'
  },
  {
    path: 'site', loadChildren: './modules/site/site.module#SiteModule'
  },
  {
    path: 'test', loadChildren: './modules/test/test.module#TestModule'
  },
  {
    // Todo, сделано, но через жопу
    path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
