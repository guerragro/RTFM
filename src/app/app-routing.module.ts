import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/component/page-not-found/page-not-found.component';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'Project', loadChildren: './modules/readme/readme.module#ReadMeModule'
  },
  {
    path: 'todoList', loadChildren: './modules/todo/todo.module#TodoModule'
  },
  {
    path: 'weatherService', loadChildren: './modules/weather/weather.module#WeatherModule'
  },
  {
    path: 'tic-tac-toe', loadChildren: './modules/tic-tac-toe/tic-tac-toe.module#TicTacToeModule'
  },
  {
    path: 'ticketService', loadChildren: './modules/ticket/ticket.module#TicketModule'
  },
  {
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
