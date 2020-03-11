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
  task: any;

  constructor() { }

  ngOnInit() {}

  // ввод чисел больше 10
  // убрать возможность вводить первым знак и двойной знак
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
        this.result = eval(this.box.join(''));
        this.box.length = 0;
        this.number = '';
        break;
      case 'C':
        this.box.length = 0;
        break;
      default:
        this.number += data;
    }
    this.task = document.getElementById('task').innerHTML;
    this.task = (data === '=') ? this.result : this.number;
  }
}
