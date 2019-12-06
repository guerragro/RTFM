import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TttComponent } from './component/ttt/ttt.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TttComponent],
  imports: [
    CommonModule,
    FormsModule,
    TicTacToeRoutingModule
  ],
  bootstrap: [TttComponent]
})
export class TicTacToeModule { }
