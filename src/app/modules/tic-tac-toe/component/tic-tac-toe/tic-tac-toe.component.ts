import { Component, OnInit, ViewChild } from '@angular/core';
import { YouAreWinnerComponent } from '../you-are-winner/you-are-winner.component';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  // сделать то сделал, но что это дало?
  @ViewChild(YouAreWinnerComponent)
  youWinner: YouAreWinnerComponent;

  // выбор игры PVP or PVE
  // _chooseGame: any;

  next = 0;
  elem: any;
  grid: string[];
  // для скрытия меню выбора
  _whoTurn: boolean;
  // для первого хода компьютера
  now: boolean;
  // для выбора игры против компьютера или игрока
  choose: string;
  // компьютер первый или второй
  comp: boolean;

  constructor() {}

  ngOnInit() {
    this.grid = ['', '', '', '', '', '', '', '', ''];
    this._whoTurn = true;
    // this.youWinner.open('Кто ходит первый?', '', '', true);
  }

  // PVE
  startGame(x) {
    if (x === 'PVP') {
      console.log('игра против друг-друга');
      this.choose = 'PVP';
    } else {
      console.log('игра против компьютера');
      this.choose = 'PVE';
      if (x === 'PVE1') {
        this.now = true;
        this.comp = true;
        this.nextTurn(4);
      }
    }
    this._whoTurn = false;
  }

  nextTurn(ind) {
    console.log(this.grid);
    // PVE
    if (this.choose === 'PVE') {
      // true - переменная для хода компьютера первым номером
      // false - переменная для хода компьютера вторым номером
      if (this.comp) {
        console.log('компьютер ходит первый');
        // компьютер ходит первый
        if (this.now) {
          // запускается один раз, ход компьютера
          this.now = false;
          this.grid.splice(ind, 1, 'x');
          console.log(this.grid);
        } else {
          this.grid.splice(ind, 1, '0');
          this.PVE(this.grid, ind, '0');
        }
      } else {
        // компьютер ходит второй
        console.log('компьютер ходит второй');
        this.grid.splice(ind, 1, 'x');
        this.PVE(this.grid, ind, 'x');
      }
      // PVP
    } else if (this.choose === 'PVP') {
      // очередь
      this.next += 1;
      this.elem = document.getElementsByTagName('td');
      this.elem = event.target;
      // console.log(this.elem);
      if (this.next % 2 === 0) {
        // добавляем элемент в массив и отражаем на экране
        this.elem.innerHTML = '0';
        this.grid.splice(ind, 1, '0');
        this.winner(this.grid, '0');
      } else {
        this.elem.innerHTML = 'x';
        this.grid.splice(ind, 1, 'x');
        this.winner(this.grid, 'x');
      }
    }
  }

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
  // сделать массив с очками, хороший ход +10, плохой -10, 0 это заполненные клетки (или что-то такое)
  PVE(res, ind, player) {
    // true - компьютер ходит первый
    // false - компьютер ходит второй;
    if (this.comp) {
      if (res[0] === '0' || res[2] === '0' || res[6] === '0' || res[8] === '0') {
        // первый вариант развития событий
        console.log('первая цепочка');
      } else if (res[1] === '0' || res[3] === '0' || res[5] === '0' || res[7] === '0') {
        // ходы ai
        //   4, 6, 8, 0 или 7
        // ходы pl
        //   1 или 3, 2, 7 или 0
        this.grid.splice(6, 1, 'x');
        if (res[2] === '0') {
          this.grid.splice(8, 1, 'x');
          if (res[7] === '0') {
            this.grid.splice(0, 1, 'x');
            this.winner(this.grid, 'x');
          }
        }
      }
    } else {
      console.log('второй');
    }
    console.log(this.grid);
  }

  game(res) {
    if (this.comp) {
      if ('67') {
        console.log('1');
      }
    } else {
      console.log('компьютер ходит второй');
    }
  }

  newGame() {
    // очищаем массив и игровое поле
    // для новой или уже законченной игры
    // в окне выйгрыша или просто в пустом поле
  }

  // проверка на выйгрышные комбинации
  winner(ans, player) {
    if ((ans[0] === player && ans[1] === player && ans[2] === player) ||
      (ans[3] === player && ans[4] === player && ans[5] === player) ||
      (ans[6] === player && ans[7] === player && ans[7] === player) ||
      (ans[0] === player && ans[4] === player && ans[8] === player) ||
      (ans[2] === player && ans[4] === player && ans[6] === player) ||
      (ans[0] === player && ans[3] === player && ans[6] === player) ||
      (ans[1] === player && ans[4] === player && ans[7] === player) ||
      (ans[2] === player && ans[5] === player && ans[8] === player)
    ) {
      this.youWinner.open('Поздравляем', player, 'Хотите начать новую игру?', false);
    }
    // пока не придумал зачем функция должна возвращать false
    return false;
  }

  // для рандомной игры
  random(min: number = 0, max: number = 8) {
    // проверять, если элемент в массив пустая строка, то можно записывать, если нет, то следующий
    // проблема, событие не отлавливается поэтому не отрисовывается
    // this.II = Math.floor(Math.random() * (max - min + 1) + min);
    // this.nextTurn(this.II);
    // return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
