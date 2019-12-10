import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttt',
  templateUrl: './ttt.component.html',
  styleUrls: ['./ttt.component.css']
})
export class TttComponent implements OnInit {

  ttt = ['', '', '', '', '', '', '', '', ''];
  counter = true;
  player: string;

  constructor() { }

  ngOnInit() {
  }

  click(id) {
    this.player = (this.counter === true) ? 'x' : 'y';
    if (this.counter) {
      this.ttt.splice(id, 1, this.player);
      this.counter = false;
      // this.win(this.ttt, 'x');
    } else {
      this.ttt.splice(id, 1, this.player);
      this.counter = true;
      // this.win(this.ttt, 'y');
    }
    console.log(this.ttt);
    this.win(this.ttt, this.player);
  }
  win(res, player) {
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

}

// // Подумать логигу по switch-case;
// // Возможно цикл;
// // запоминать пустые поля в переменную, и эту переменную
// // тот элемент который уже считался, убирать из поиска
// // или добавлять в новый массив, по которыму и будет считаться
// // ['', '', '', '', '', '', '', '', ''] = ['', '', '', '', 'x', '0', '', '', ''];
// // new Array = ['x', '0', '', '', '', '', '', '', ''];
// // ['', '', '', '', 'x', '0', '0', 'x', ''];
// // new Array = ['x', '0', '0', 'x', '', '', '', '', ''];
// // возвращение индексы пустых строк
// // сделать массив с очками, хороший ход +10, плохой -10, 0 это заполненные клетки
// PVE(res, ind, player) {
//   // true - компьютер ходит первый
//   // false - компьютер ходит второй;
//   if (this.comp) {
//     if (res[0] === '0' || res[2] === '0' || res[6] === '0' || res[8] === '0') {
//       // первый вариант развития событий
//       console.log('первая цепочка');
//     } else if (res[1] === '0' || res[3] === '0' || res[5] === '0' || res[7] === '0') {
//       // ходы ai
//       //   4, 6, 8, 0 или 7
//       // ходы pl
//       //   1 или 3, 2, 7 или 0
//       this.grid.splice(6, 1, 'x');
//       if (res[2] === '0') {
//         this.grid.splice(8, 1, 'x');
//         if (res[7] === '0') {
//           this.grid.splice(0, 1, 'x');
//           this.winner(this.grid, 'x');
//         }
//       }
//     }
//   } else {
//     console.log('второй');
//   }
//   console.log(this.grid);
// }
//
// game(res) {
//   if (this.comp) {
//     if ('67') {
//       console.log('1');
//     }
//   } else {
//     console.log('компьютер ходит второй');
//   }
// }
//
// newGame() {
//   // очищаем массив и игровое поле
//   // для новой или уже законченной игры
//   // в окне выйгрыша или просто в пустом поле
// }
//
// // проверка на выйгрышные комбинации
// winner(ans, player) {
//   if ((ans[0] === player && ans[1] === player && ans[2] === player) ||
//     (ans[3] === player && ans[4] === player && ans[5] === player) ||
//     (ans[6] === player && ans[7] === player && ans[7] === player) ||
//     (ans[0] === player && ans[4] === player && ans[8] === player) ||
//     (ans[2] === player && ans[4] === player && ans[6] === player) ||
//     (ans[0] === player && ans[3] === player && ans[6] === player) ||
//     (ans[1] === player && ans[4] === player && ans[7] === player) ||
//     (ans[2] === player && ans[5] === player && ans[8] === player)
//   ) {
//     this.youWinner.open('Поздравляем', player, 'Хотите начать новую игру?', false);
//   }
//   // пока не придумал зачем функция должна возвращать false
//   return false;
// }
//
// // для рандомной игры
// random(min: number = 0, max: number = 8) {
//   // проверять, если элемент в массив пустая строка, то можно записывать, если нет, то следующий
//   // проблема, событие не отлавливается поэтому не отрисовывается
//   // this.II = Math.floor(Math.random() * (max - min + 1) + min);
//   // this.nextTurn(this.II);
//   // return Math.floor(Math.random() * (max - min + 1) + min);
// }
