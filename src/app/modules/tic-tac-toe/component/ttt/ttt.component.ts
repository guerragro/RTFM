import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttt',
  templateUrl: './ttt.component.html',
  styleUrls: ['./ttt.component.css']
})
export class TttComponent implements OnInit {

  box: number[] | string[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  player: string = '';
  game: string = 'PVE';

  constructor() {}

  ngOnInit() {
  }

  choice(game) {
    if (game === 'PVP') {
      this.game = 'PVP';
    } else {
      this.game = 'PVE';
    }
  }

  play(start) {
    this.player = (this.player === '0') ? 'x' : '0';
    if (this.player === 'x') {
      this.box.splice(start, 1, this.player);
    } else {
      this.box.splice(start, 1, this.player);
    }
    this.howWon(this.box, this.player);
  }

  howWon(res, player) {
    console.log(res);
    if (
      (res[0] === player && res[1] === player && res[2] === player) ||
      (res[3] === player && res[4] === player && res[5] === player) ||
      (res[6] === player && res[7] === player && res[8] === player) ||
      (res[0] === player && res[4] === player && res[8] === player) ||
      (res[2] === player && res[4] === player && res[6] === player) ||
      (res[0] === player && res[3] === player && res[6] === player) ||
      (res[1] === player && res[4] === player && res[7] === player) ||
      (res[2] === player && res[5] === player && res[8] === player)
    ) {
      console.log('выйграл ' + player);
    } else {
      if (this.game === 'PVE') {
        console.log('vs comp')
        this.checkComp(this.box, this.player)
      }
    }
  }

  // [ +10, +10, +10,]  [0 1 2]
  // [ +10, x, +10,]    [3 4 5]
  // [ +10, +10, +10,]  [6 7 8]
  checkComp(res, player) {
    console.log(player);
    if (res[0] == 'x' && res[1] == 'x' && res[2] !== '0') {
      res[2] = player;
    } else if (res[0] == 'x' && res[2] == 'x') {
      res[1] = player;
    } else if (res[1] == 'x' && res[2] == 'x') {
      res[0] = player;
    }
    console.log(res);
  }

  clear() {
    this.box = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}
