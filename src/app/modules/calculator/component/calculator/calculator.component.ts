import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  box = [];
  number: string = '';
  result: string;
  task: any;

  constructor() { }

  ngOnInit() {}

  amount(data) {
    console.log(typeof data, data, typeof Number(data));
    console.log(this.box.length);
    // todo create the condition
    if (true) {
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
    } else {
      alert('Неверная операция');
    }
  }
}
