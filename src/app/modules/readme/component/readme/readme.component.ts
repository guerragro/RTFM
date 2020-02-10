import { Component, OnInit } from '@angular/core';
import {ReadMeService} from '../../service/readme.service';
import {ReadMeStore} from '../../store/readMeStore';
import {Observable} from 'rxjs';
import {fromMobx} from 'ngx-mobx';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  test: boolean = false;
  todos$: Observable<any>;

  constructor(
    // public service: ReadMeService,
    public readMeStore: ReadMeStore
  ) { }

  ngOnInit() {
    // this.todos = this.service.getProject();
    this.readMeStore.getProject();
    this.todos$ = fromMobx(() => this.readMeStore.todos);
    this.todos$.subscribe(
      res => console.log(res)
    );
    // console.log(this.todos);
  }

  toggle() {
    console.log("выпадающее меню");
    this.test = !this.test;
  }

}
