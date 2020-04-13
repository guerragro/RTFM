import { Component, OnInit } from '@angular/core';
import {ReadMeService} from '../../service/readme.service';
import {ReadMeStore} from '../../store/readMeStore';
import {Observable} from 'rxjs';
import {fromMobx} from 'ngx-mobx';
import {ProjectWorldInterface} from '../../../../models/todo.model';
import icons from 'glyphicons';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  dataList$: Observable<ProjectWorldInterface[]>;
  dataList;
  icons = icons;

  proj: string;
  task: string;
  shifter: boolean = false;

  constructor(
    public service: ReadMeService,
    public readMeStore: ReadMeStore
  ) { }

  ngOnInit() {
    this.readMeStore.getDataProject();
    this.dataList$ = fromMobx(() => this.readMeStore.todos);
    this.dataList$.subscribe(
      res => this.dataList = res,
      err => console.log("error")
    );
  }

  addTask(data, id?) {
    this.readMeStore.addTask(data, id);
  //  todo выдергивать задач
  }

  changeStatus(id) {
    this.readMeStore.changeTaskStatus(id);
  }
  click(a) {
    console.log(a);
  }
}
