import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: string;
  box = [];
  number: string = '';

  _test = [];
  t: any;

  constructor() { }

  ngOnInit() {}

  // затуп не работает, когда операция простая т.е. 1 + 1
  click(data) {
    switch (data) {
      case '/':
      case '*':
      case '+':
      case '-':
        const sign = data;
        this.box.push(this.number, sign);
        this.number = '';
        break;
      case '=':
        this.box.push((this.number === '') ? data : this.number);
        this.box.forEach((a, index) => this.test(a, index));
        // this.amount(this.box);
        // this.test(this.box);
        this.number = '';
        break;
      default:
        this.number += data;
    }
  }

  amount(res) {
    this.result = eval(res.join(''));
    console.log(this.result);
    // очистка
    this.box.length = 0;
  }

  // нужно вырезать то, что первым согласно правилам
  // произвести расчет
  // вставить обратно
  // и начать заново
  // нужна рекурсия, конечное это когда массив равен нюли или что-то там
  test(numb, index) {
    console.log(this.box);
    console.log(numb, index);
    if (numb === '/') {
      this._test = this.box.splice(index - 1, 3);
      console.log(this._test);
      this.t = this._test[0] / this._test[2];
    } else if (numb === '*') {
      this._test = this.box.splice(index - 1, 3);
    } else if (numb === '+') {
      this._test = this.box.splice(index - 1, 3);
    } else {
      this._test = this.box.splice(index - 1, 3);
    }
  }
}
