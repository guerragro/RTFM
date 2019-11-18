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

  constructor() { }

  ngOnInit() {
  }
  // ДЛЯ ПРОСТЫХ ВЫЧИСЛЕНИЙ
  // amount(x) {
  // // проверка, что вводиться число
  // console.log(/[0-9]+/.test(x));
  // this._amount.push(+x);
  // }
  // multi() {
  //   this.result = this._amount.reduce((total, a) => +total * +a);
  // }
  // split() {
  //   this.result = this._amount.reduce((total, a) => +total / +a);
  // }
  // sum() {
  //   this.result = this._amount.reduce((total, a) => total + a);
  // }
  // diff() {
  //   this.result = this._amount.reduce((total, a) => total - a);
  // }
  // clear() {
  //   this._amount.length = 0;
  // }

  // ДЛЯ ПРОСТЫХ ВЫЧИСЛЕНИЙ
  // amount(x) {
  //   switch (x) {
  //     case '/':
  //     case '*':
  //     case '+':
  //     case '-':
  //       // провести проверки
  //       this.firstNumb = this.str;
  //       this.mark = x;
  //       break;
  //     case '=':
  //       this.result(this.firstNumb, this.mark, this.lastNumb);
  //       break;
  //     default:
  //       if (this.firstNumb) {
  //         this.lastNumb += x;
  //       } else {
  //         this.str += x;
  //         console.log(this.str);
  //         // this._field = document.getElementById('field');
  //         // this._field.value = this.str;
  //       }
  //   }
  // }
  //
  // private result(a, b, c) {
  //   switch (b) {
  //     case '/':
  //       console.log(+a / +c);
  //       break;
  //     case '*':
  //       console.log(+a * +c);
  //       break;
  //     case '+':
  //       console.log(+a + +c);
  //       break;
  //     case '-':
  //       console.log(+a - +c);
  //       break;
  //   }
  //   console.log();
  // }

  // ДЛЯ СЛОЖНЫХ ВЫЧИСЛЕНИЙ
  amount(x) {
    if (/[0-9]+/.test(x)) {
      if (this.orgNumb) {
        this.lastNumb += x;
      } else {
        this.firstNumb += x;
      }
    } else {
      this.orgNumb = this.lastNumb || this.firstNumb ;
      this.lastNumb = '';
      this.arr.push(+this.orgNumb);
      if (x === '=') {
        // рабочая версия сложных вычислений
        // this._result(this.arr);
        this.arr.forEach((a, index) => this.methods(a, index));
        // this.test(this.arr);
        // this.arr.forEach(a => this._result2(a));
      } else {
        // пушим знак вычисления
        this.arr.push(x);
      }
    }
  }
  // рабочая версия сложных вычислений
  // _result(res) {
  //   this.result = eval(res.join(''));
  //   console.log(this.result);
  // }
  // нужно продумать приоритеты

  clearAmount() {
    this.arr.length = 0;
  }
  methods(x, op) {
    if (x === '/') {
      this._arr = this.arr.splice(op - 1, 3);
      this._arr = this._arr[0] / this._arr[2];
      this.arr.splice(op - 1, 0, this._arr);
      console.log(this.arr);
    } else if (x === '*') {
      this._arr = this.arr.splice(op - 1, 3);
      this._arr = this._arr[0] / this._arr[2];
      this.arr.splice(op - 1, 0, this._arr);
      console.log(this.arr);
      // через рекурсию
    }
  }
  // function sum(x, y){
  //   return x + y;
  // }
  //
  // function subtract(x, y){
  //   return x - y;
  // }
  //
  // function operation(x, y, func){
  //
  //   var result = func(x, y);
  //   console.log(result);
  // }

  // get resData() {
  //   return this._arr;
  // }
  // set resData(value) {
  //   this._arr = value;
  //   console.log('GG');
  // }

  // console.log("Sum");
  // operation(10, 6, sum);  // 16
  //
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
  // result(a, b, c): any {
  //   switch (b) {
  //     case '/':
  //       return y = +a / +c;
  //       console.log(+a / +c);
  //       break;
  //     case '*':
  //       console.log(+a * +c);
  //       break;
  //     case '-':
  //       console.log(+a - +c);
  //       break;
  //     case '+':
  //       console.log(+a + +c);
  //       break;
  //   }
  //   console.log(y);
  // }
  // clear() {
  //   this.arr.length = 0;
  // }

  // попробывать через sort()

  // Calculator(str, a) {
  //   this.methods = {
  //     '/': a / b,
  //     '*': a * b,
  //     '-': a - b,
  //     '+': a + b,
  //   };
  //   this.calculator = this._calculator(str);
  // }
  // _calculator(ans) {
  //   ans.split('');
  //   return this.methods;
  // }
  // Незнаю() {
  //   if ('*' || '/') {
  //
  //   } else ('+' || '-') {
  //
  //   }
  // }
  // private split(a) {
  //   this.arr.push(a);
  //   console.log(this.arr);
  // }
  // private multi(a) {
  //   console.log(a);
  // }
  // private diff(a) {
  //   console.log(a);
  // }
  // private sum(a) {
  //   console.log(a);
  // }
  // private clear() {
  //   this._field = document.getElementById('field');
  //   delete this._field.value;
  // }

  // function Calculator() {
  //   var methods = {
  //     '-': function(a, b) {
  //       console.log(a - b);
  //     },
  //     '+': function (a, b) {
  //       console.log(a + b)
  //     }
  //   };
  //   this.calculator = function(str) {
  //     var split = str.split('');
  //     a = +split[0];
  //     op = split[1];
  //     b = +split[2]
  //     console.log(a, op, b);
  //     return methods[op](a, b);
  //   };
  // }
  //
  // var calc = new Calculator;
  // calc.calculator('2+3')

}
