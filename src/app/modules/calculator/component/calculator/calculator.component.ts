import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  // ПРОСТЫЕ ВЫЧИСЛЕНИЯ ЧЕРЕЗ SWITCH AND CASE; REDUCE

  result: string;
  _amount: any = [];

  orgNumb = '';
  firstNumb = '';
  lastNumb = '';
  mark: string;

  arr = [];
  _arr: any;

  // calculator: any;
  sign: string;
  new = [];
  number = '';


  constructor() { }

  ngOnInit() {}

  click(data) {
    // if (typeof data === 'number' || data === ',') {
    // if (data === '/'  data === ','  data === '*'  data === '+'  data === '-') {
    //   // console.log(typeof data);
    //   this.number += data;
    //   console.log(this.number);
    // }
    switch (data) {
      case '/':
      case '*':
      case '+':
      case '-':
        // this.sign = data;
        // const sign = data;
        this.new.push(data);
        this.number = '';
        break;
      case '=':
        this.amount(this.new);
        break;
      default:
        this.new.push(this.number);
    }
    // console.log(this.new);
  }

  amount(res) {
    this.result = eval(res.join(''));
    this.new.length = 0;
    console.log(this.result);
  }

  // // ДЛЯ СЛОЖНЫХ ВЫЧИСЛЕНИЙ
  // amount(x) {
  //   if (/[0-9]+/.test(x)) {
  //     if (this.orgNumb) {
  //       this.lastNumb += x;
  //     } else {
  //       this.firstNumb += x;
  //     }
  //   } else {
  //     this.orgNumb = this.lastNumb || this.firstNumb ;
  //     this.lastNumb = '';
  //     this.arr.push(+this.orgNumb);
  //     if (x === '=') {
  //       // рабочая версия сложных вычислений
  //       // this._result(this.arr);
  //       this.arr.forEach((a, index) => this.methods(a, index));
  //       // this.test(this.arr);
  //       // this.arr.forEach(a => this._result2(a));
  //     } else {
  //       // пушим знак вычисления
  //       this.arr.push(x);
  //     }
  //   }
  // }
  // // рабочая версия сложных вычислений
  // // _result(res) {
  // //   this.result = eval(res.join(''));
  // //   console.log(this.result);
  // // }
  // // нужно продумать приоритеты
  //
  // clearAmount() {
  //   this.arr.length = 0;
  // }

  // console.log("Subtract");
  // operation(10, 6, subtract); // 4
  // нужно сделать массив всех чисел, до тех пор пока не нажимается равно
  // amount(x) {
  //   switch (x) {
  //     case '/':
  //       this.firstNumb = this.str;
  //       this.mark = '/';
  //       this.arr.push(this.str);
  //       delete this.str;
  //       // очистить this.firstNumb
  //       // очистить this.str
  //       break;
  //     case '*':
  //       this.mark = '*';
  //       break;
  //     case '-':
  //       this.mark = '-';
  //       break;
  //     case '+':
  //       this.mark = '+';
  //       break;
  //     case '=':
  //       this.arr.push(this.lastNumb);
  //       console.log(this.arr);
  //       // this.result(this.firstNumb, this.mark, this.lastNumb);
  //       break;
  //     default:
  //       if (this.firstNumb) {
  //         this.lastNumb += x;
  //         this.arr.push(this.firstNumb);
  //         console.log(this.arr);
  //         // console.log(this.lastNumb);
  //         delete this.firstNumb;
  //       } else {
  //         this.str += x;
  //         // console.log(this.str);
  //       }
  //   }
  // }
}
