import { Component, OnInit } from '@angular/core';
import {AppState, State} from '../../store/test.reducer';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/test.action';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: any;
  store: Store<AppState>;
  city = ['l', 'o', 'n', 'd', 'o', 'n'];
  bizarro = ['kh', 'ch', 'sh', 'shh', 'zh', 'a', 'b', 'v', 'g', 'd', 'e', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'с', '#', 'y', 'ь', 'e', 'u', 'a'];
  origin =  ['х', 'ч', 'ш', 'щ', 'ж', 'a', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'ц', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

  constructor(
  ) { }

  ngOnInit() {
    // this.store.subscribe(
    //   res => console.log(res)
    // );
    this.city.forEach( (a) =>
      this.bizarro.forEach((b, index) => {
        if (b === a) {
          console.log(this.origin[index]);
        }
      })
    );
  }

  add() {
    // this.store.dispatch ( new fromAction.add(this.test) );
  }

}
