import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttt',
  templateUrl: './ttt.component.html',
  styleUrls: ['./ttt.component.css']
})
export class TttComponent implements OnInit {

  box = ['', '', '', '', '', '', '', '', ''];
  counter: boolean = false;
  player: string;
  game: string = '';

  box2: any = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnInit() {
  }

  // выбор игры, не знаю зачем сделал
  choice(game) {
    if (game === 'PVP') {
      this.game = 'PVP';
    } else {
      this.game = 'PVE';
    }
  }

  // Друг против друга; Рабочая версия
  // PVP(turn) {
  //   this.counter = !this.counter;
  //   this.player = (this.counter === true) ? 'x' : 'y';
  //   if (this.counter) {
  //     this.box.splice(turn, 1, this.player);
  //   } else {
  //     this.box.splice(turn, 1, this.player);
  //   }
  //   console.log(this.box);
  //   this.howWon(this.box, this.player);
  // }

  // против компьютера;
  PVE(turn) {
    this.counter = !this.counter;
    this.player = (this.counter === true) ? 'x' : 'y';
    if (this.counter) {
      this.box2.splice(turn, 1, this.player);
    } else {
      this.box2.splice(turn, 1, this.player);
    }
    this.turn(this.box2, this.player);
  }

  // [ +10, +10, +10,] [0, 1, 2]
  // [ +10, x, +10,]   [3, 4, 5]
  // [ +10, +10, +10,] [6, 7, 8]
  turn(res, player) {
    if (res[4] === 'x') {
      res[0] += 10;
      // первый блок условий
    } else if (res[0] === 'x' && res[1] === 'x') {
      res[2] += 10;
    } else if (res[0] === 'x' && res[2] === 'x') {
      res[1] += 10;
    } else if (res[1] === 'x' && res[2] === 'x') {
      res[2] += 10;
    //  второй блок условий
    } else if (res[3] === 'x' && res[4] === 'x') {
      res[5] += 10;
    } else if (res[3] === 'x' && res[5] === 'x') {
      res[4] += 10;
    } else if (res[4] === 'x' && res[5] === 'x') {
      res[3] += 10;
    //  третий блок условий
    } else if (res[6] === 'x' && res[7] === 'x') {
      res[8] += 10;
    } else if (res[6] === 'x' && res[8] === 'x') {
      res[7] += 10;
    } else if (res[7] === 'x' && res[8] === 'x') {
      res[6] += 10;
    }
    // // Math.max.apply(null, res);
    // console.log(res);
    // // this.howWon(res, 'x');
  }
  // выйгрышные комбинации;
  howWon(res, player) {
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
    }
  }

  clear() {
    this.box = ['', '', '', '', '', '', '', '', ''];
    this.box2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}
// switch (true) {
//   case (res[0] === player && res[1] === player && res[2] === player):
//     return res;
//     break;
//   case (res[3] === player && res[4] === player && res[5] === player):
//     return res;
//     break;
//   case (res[6] === player && res[7] === player && res[8] === player):
//     return res;
//     break;
//   case (res[0] === player && res[4] === player && res[8] === player):
//     return res;
//     break;
//   case (res[2] === player && res[4] === player && res[6] === player):
//     return res;
//     break;
//   case (res[0] === player && res[3] === player && res[6] === player):
//     return res;
//     break;
//   case (res[1] === player && res[4] === player && res[7] === player):
//     return res;
//     break;
//   case (res[2] === player && res[5] === player && res[8] === player):
//     return res;
//     break;
//   default:
//     return res;
// }

// Подумать логигу по switch-case;
// Возможно цикл;
// запоминать пустые поля в переменную, и эту переменную
// тот элемент который уже считался, убирать из поиска
// или добавлять в новый массив, по которыму и будет считаться
// ['', '', '', '', '', '', '', '', ''] = ['', '', '', '', 'x', '0', '', '', ''];
// new Array = ['x', '0', '', '', '', '', '', '', ''];
// ['', '', '', '', 'x', '0', '0', 'x', ''];
// new Array = ['x', '0', '0', 'x', '', '', '', '', ''];
// возвращение индексы пустых строк
// сделать массив с очками, хороший ход +10, плохой -10, 0 это заполненные клетки

// Порядок:
// - после первого хода, нужно раствавить? значения и поставить 'y' в клетку
// далее пока непонятно
