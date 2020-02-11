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
  todos$: Observable<ProjectInterface[]>;
  todos;

  constructor(
    public service: ReadMeService,
    public readMeStore: ReadMeStore
  ) { }

  ngOnInit() {
    // this.todos = this.service.getProject();
    this.readMeStore.getDataProject();
    this.todos$ = fromMobx(() => this.readMeStore.todos);
    this.todos$.subscribe(
      res => this.todos = res
    );
  }

  // новый проект
  addProject() {
    // либо через переменную будем дергать value, либо через getElement
    // нужно узнать как правильно?!
    this.test = document.getElementById('addProject');
    console.log(this.test.value);
  }

  // выпадающие список задач по проекту
  toggle(proj) {
    console.log(proj);
    console.log("выпадающее меню");
    this.shifter = !proj.view;
  }

  // новая задача
  newTask() {
    console.log('новая задача');
  }

  // удаление, выполнение и редактирование задачи

}
