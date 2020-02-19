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
  counter: number = 0;

  constructor() {}

  ngOnInit() {
    this.getRandomArbitary();
  }

  getRandomArbitary() {
    this.randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(this.randomNumber);
  }

  // todo очищать поле вводе, после каждой проверки
  // todo блокировать кнопку после пройгрыша, либо выйгрыша
  // todo довавить кнопку начать заново
  lucky() {
    this.counter++;
    this.number = document.getElementById('number');
    console.log(this.number.value);
    this.text = (this.number.value < this.randomNumber) ? 'Ваша догадка меньше' :
                (this.number.value > this.randomNumber) ? 'Ваша догадка больше' : 'Верно';
    this.win = (this.number.value == this.randomNumber) ? 'Угадали' :
               (this.counter === 11) ? 'Game in over' : 'Неправильно';
    console.log(this.numbers);
    console.log(this.text, this.win);
    this.numbers = this.numbers + ' ' + this.number.value;
  }
}
