import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttt',
  templateUrl: './ttt.component.html',
  styleUrls: ['./ttt.component.css']
})
export class TttComponent implements OnInit {

  box = ['', '', '', '', '', '', '', '', ''];
  player: string = '';
  game: string = 'PVE';

  box2: any = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
        // this.turn(this.box2, this.player)
      }
    }
  }

  // [ +10, +10, +10,]  [0 1 2]
  // [ +10, x, +10,]    [3 4 5]
  // [ +10, +10, +10,]  [6 7 8]
  turn(res, player) {
    console.log('PVE');
    // первый блок условий
    if (res[4] === 'x') {
      res[0] += 10; res[1] += 10; res[2] += 10; res[3] += 10; res[5] += 10; res[6] += 10; res[7] += 10; res[8] += 10;
    } else if(true) {

    }
    // if (res[0] === 'x' && res[1] === 'x') {
    //   res[2] += 10;
    // } else if (res[0] === 'x' && res[2] === 'x') {
    //   res[1] += 10;
    // } else if (res[1] === 'x' && res[2] === 'x') {
    //   res[2] += 10;
    // //  второй блок условий
    // } else if (res[3] === 'x' && res[4] === 'x') {
    //   res[5] += 10;
    // } else if (res[3] === 'x' && res[5] === 'x') {
    //   res[4] += 10;
    // } else if (res[4] === 'x' && res[5] === 'x') {
    //   res[3] += 10;
    // //  третий блок условий
    // } else if (res[6] === 'x' && res[7] === 'x') {
    //   res[8] += 10;
    // } else if (res[6] === 'x' && res[8] === 'x') {
    //   res[7] += 10;
    // } else if (res[7] === 'x' && res[8] === 'x') {
    //   res[6] += 10;
    // }
    // Math.max.apply(null, res);
    console.log(res);
    // this.howWon(res, 'x');
  }
  checkComp() {

  }

  clear() {
    this.box = ['', '', '', '', '', '', '', '', ''];
    this.box2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}
