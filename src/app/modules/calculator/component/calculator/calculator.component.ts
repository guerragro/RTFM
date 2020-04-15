import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  box = [];
  result: string;
  task: any;

  constructor() { }

  ngOnInit() {}

  amount(data) {
    console.log(typeof data, data, typeof Number(data));
    console.log(this.box, this.box.length);
    // todo create the condition
    switch (data) {
      case '/':
      case '*':
      case '+':
      case '-':
        if (this.box.length) {
          const sign = data;
          this.box.push(sign);
        } else {
          alert('Неверная операция');
        }
        break;
      case '=':
        this.result = eval(this.box.join(''));
        this.box.length = 0;
        break;
      case 'C':
        this.box.length = 0;
        break;
      default:
        this.box.push(data);
    }
    this.task = document.getElementById('task').innerHTML;
    this.task = (data === '=') ? this.result : data;
  }
}
