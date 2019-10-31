import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicTacToeComponent} from './component/tic-tac-toe/tic-tac-toe.component';

export const routes: Routes = [{
  path: 'tictactoe',
  component: TicTacToeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule {}
