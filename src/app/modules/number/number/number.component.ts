import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  randomNumber: any;
  number: any;
  numbers: string = '';
  text: string;
  win: string;
  arr = [];

  constructor() {
  }

  ngOnInit() {
    this.getRandomArbitary();
    console.log(this.randomNumber);
  }

  getRandomArbitary() {
    this.randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(this.randomNumber);
  }

  lucky() {
    this.number = document.getElementById('number');
    console.log(this.number.value);
    if (this.randomNumber > this.number.value) {
      this.text = 'Ваша догадка меньше';
      this.win = 'Неправильно';
    } else if (this.number < this.number.value) {
      this.text = 'Ваша догадка больше';
      this.win = 'Неправильно';
    } else {
      this.win = 'Правильно';
      this.text = 'Угадали';
    }
    this.numbers = this.numbers + ', ' + this.number.value;
  }

}
