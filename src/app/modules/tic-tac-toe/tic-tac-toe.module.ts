import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './component/tic-tac-toe/tic-tac-toe.component';
import { YouAreWinnerComponent } from './component/you-are-winner/you-are-winner.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TicTacToeComponent, YouAreWinnerComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [TicTacToeComponent]
})
export class TicTacToeModule { }
