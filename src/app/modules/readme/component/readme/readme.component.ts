import { Component, OnInit } from '@angular/core';
import {ReadMeStore} from '../../store/readMeStore';
import {Observable} from 'rxjs';
import {fromMobx} from 'ngx-mobx';
import {Project} from '../../model/proj';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  dataList$: Observable<Project[]>;
  dataList: Project[];

  project: string;
  task: string;

  constructor(
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
