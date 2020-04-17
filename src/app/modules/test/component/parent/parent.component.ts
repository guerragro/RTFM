import {Component, OnInit, ViewChild} from '@angular/core';
import { Service } from '../../service/service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TestStore } from '../../store/mobx.store';
import { fromMobx } from 'ngx-mobx';
import * as fromAction from '../../store/ngrx.action';
import {observe} from 'mobx';
import {PresentModalComponent} from './modal/present';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(PresentModalComponent)
  presentModal: PresentModalComponent;

  todo: any;
  error: any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    public service: Service,
  ) {
    // this.store.select('todos').subscribe(res => console.log(res));
  }

  ngOnInit() {
    // this.service.makeRequest().subscribe(
    //   res => console.log(res),
    //   err => {
    //     // alert(err['statusText']);
    //     console.log(err);
    //   }
    // );
    // this.task(this.observable, this.next(letter));
  }
  getRequest() {
    this.service.makeGetRequest().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  postRequest() {
    this.service.makePostRequest().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  present() {
    this.presentModal.open();
  }
}
