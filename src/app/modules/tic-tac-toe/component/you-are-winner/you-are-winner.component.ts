import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-you-are-winner',
  templateUrl: './you-are-winner.component.html',
  styleUrls: ['./you-are-winner.component.css']
})
export class YouAreWinnerComponent implements OnInit {

  winner: string;
  restart: string;
  player: string;
  turn: string;
  _showWinner: boolean;
  _whoTurn: boolean;

  constructor() { }

  ngOnInit() {
    // this._showWinner = false;
    // this._whoTurn = false;
  }

  open(header, player, restart, turn) {
    if (turn) {
      this.turn = header;
      this._whoTurn = true;
    } else {
      this.winner = header;
      this.player = player;
      this.restart = restart;
      this._showWinner = true;
    }
  }
  newGame() {
    alert('hello');
  }
  GG() {
    alert('GG');
  }
  // gameChoose(player) {
  //   console.log(player);
  //   this._whoTurn = false;
  //   return true;
  //   // this.tictactoe.whoTurn(player);
  //   // alert('gg');
  // }
}
