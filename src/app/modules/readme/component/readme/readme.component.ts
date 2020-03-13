import { Component, OnInit } from '@angular/core';
import {ReadMeService} from '../../service/readme.service';
import {ReadMeStore} from '../../store/readMeStore';
import {Observable} from 'rxjs';
import {fromMobx} from 'ngx-mobx';
import {ProjectWorldInterface} from '../../../../models/todo.model';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  dataList$: Observable<ProjectWorldInterface[]>;
  dataList;

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

  toggle(proj) {
    // переделать эту чушь
    proj.view = (this.shifter) ? this.shifter = false : this.shifter = true;
  }

  addTask(data, id?) {
    this.readMeStore.addTask(data, id);
    // либо через переменную будем дергать value, либо через getElement
    // нужно узнать как правильно?!
    // this.test = document.getElementById('addData');
    // console.log(this.test.value, typeof this.test.value);
  }

  changeStatus(id) {
    this.readMeStore.changeTaskStatus(id);
  }
}
