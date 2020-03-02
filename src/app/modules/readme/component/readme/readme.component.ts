import { Component, OnInit } from '@angular/core';
import {ReadMeService} from '../../service/readme.service';
import {ReadMeStore} from '../../store/readMeStore';
import {Observable} from 'rxjs';
import {fromMobx} from 'ngx-mobx';
import {ProjectWorldInterface, ProjectWorld, TaskWorld} from '../../../../models/todo.model';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  test: any;
  shifter: boolean = false;
  dataList$: Observable<ProjectWorldInterface[]>;
  dataList;

  proj: string;
  task: string;

  constructor(
    public service: ReadMeService,
    public readMeStore: ReadMeStore
  ) { }

  ngOnInit() {
    // this.todos = this.service.getProject();
    this.readMeStore.getDataProject();
    this.dataList$ = fromMobx(() => this.readMeStore.todos);
    this.dataList$.subscribe(
      res => this.dataList = res,
      err => console.log("error")
    );
  }

  // выпадающие список задач по проекту
  toggle(proj) {
    // переделать эту чушь
    proj.view = (this.shifter) ? this.shifter = false : this.shifter = true;
  }

  // добавление
  addData(data, id?) {
    if (id) {
      console.log("task");
      // добавление задачи
      // в этом блоке будет генерироваться уникальный id
      this.dataList.filter(a => (a.id === id) ? a.tasks.push( new TaskWorld(1, data)) : false);
    } else {
      console.log("project");
      // добавление проекта
      this.dataList.push(new ProjectWorld(id, data));
      console.log(this.dataList);
    }
    // либо через переменную будем дергать value, либо через getElement
    // нужно узнать как правильно?!
    this.test = document.getElementById('addData');
    console.log(this.test.value, typeof this.test.value);
  }

  // удаление, выполнение и редактирование задачи
  done(id) {
    this.dataList.filter(a => a.tasks.find(b => b.done = (b.id === id) ? true : false));
    // TODO проверить выполнения каждой позиции
    console.log(this.dataList);
  }

  // нужно ли удалять задачи или лучше ее перенасить в stash?!
  delete(id) {
  }

  clickMe(task) {
    console.log(task);
  }

}
