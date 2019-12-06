import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TttComponent} from './component/ttt/ttt.component';

const routes: Routes = [{
  path: '',
  component: TttComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
