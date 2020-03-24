import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import icons from 'glyphicons';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TestStore } from '../../store/mobx.store';
import { fromMobx } from 'ngx-mobx';
import * as fromAction from '../../store/ngrx.action';
import {observe} from 'mobx';

@Component({
  selector: 'app-test',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  icons = icons;
  todo: any;
  error: any;

  constructor(
    private service: Service,
  ) {
    // this.store.select('todos').subscribe(res => console.log(res));
  }

  ngOnInit() {
    // this.task(this.observable, this.next(letter));
  }
  click() {}
}
