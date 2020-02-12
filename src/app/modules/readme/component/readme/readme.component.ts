import { Component, OnInit } from '@angular/core';
import {ReadMeService} from '../../service/readme.service';
import {ReadMeStore} from '../../store/readMeStore';
import {Observable} from 'rxjs';
import {fromMobx} from 'ngx-mobx';
import {ProjectInterface} from '../../model';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  test: any;
  shifter: boolean = false;
  projList$: Observable<ProjectInterface[]>;
  projList;

  task: string;

  constructor(
    public service: ReadMeService,
    public readMeStore: ReadMeStore
  ) { }

  ngOnInit() {
    // this.todos = this.service.getProject();
    this.readMeStore.getDataProject();
    this.projList$ = fromMobx(() => this.readMeStore.todos);
    this.projList$.subscribe(
      res => this.projList = res
    );
  }

  // выпадающие список задач по проекту
  toggle(proj) {
    // переделать эту чушь
    proj.view = (this.shifter) ? this.shifter = false : this.shifter = true;
  }

  // новый проект
  addProject(data, id) {
    console.log(this.projList.filter(a => (a.id === id) ? a.task.push(data) : false));
    // this.projList.filter(a => a.id === id);
    // либо через переменную будем дергать value, либо через getElement
    // нужно узнать как правильно?!
    this.test = document.getElementById('addProject');
    console.log(this.test.value);
  }

  // новая задача
  newTask() {
    console.log('новая задача');
  }

  // удаление, выполнение и редактирование задачи

}
