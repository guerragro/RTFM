import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TttComponent } from './component/ttt/ttt.component';
import {FormsModule} from '@angular/forms';
import {ChoiseModelComponent} from './component/modal/choice';

@NgModule({
  declarations: [
    TttComponent,
    ChoiseModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TicTacToeRoutingModule
  ],
  bootstrap: [TttComponent]
})
export class TicTacToeModule { }
