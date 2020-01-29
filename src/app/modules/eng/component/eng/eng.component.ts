import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eng',
  templateUrl: './eng.component.html',
  styleUrls: ['./eng.component.css']
})
export class EngComponent implements OnInit {

  word: any;
  bizarro = ['kh', 'ch', 'sh', 'shh', 'zh', 'a', 'b', 'v', 'g', 'd', 'e', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'с', '#', 'y', 'ь', 'e', 'u', 'a'];
  origin =  ['х',  'ч',  'ш',  'щ',   'ж',  'a', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'ц', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

  constructor() { }

  ngOnInit() {
  }

  // TODO нужно доделать
  // функция для с английского на русский
  translit(word) {
    word = word.split('');
    word.forEach( (a) =>
      this.bizarro.forEach((b, index) => {
        if (b === a) {
          console.log(this.origin[index]);
        }
      })
    );
  }
}
