import { Injectable } from '@angular/core';
import { action, observable} from 'mobx';
import { ReadMeService } from '../service/readme.service';
import {Project, ProjectModel, ToDo} from '../model/proj';

@Injectable()
export class ReadMeStore {

  @observable todos: Project[] = [];

  constructor(
    public service: ReadMeService
  ) {}

  @action getDataProject() {
    this.service.getProject().subscribe(res => this.todos = res);
    console.log(this.todos);
  }
  @action addTask(data, id?) {
    if (id) {
      // добавление задачи
      this.todos.filter(a => (a.id === id) ? a.tasks.push( new ToDo(1, data)) : false);
    } else {
      // todo есть проблема с добаление новой задачи у нового проекта, problem in id
      // добавление проекта
      this.todos.push(new ProjectModel(id, data));
    }
  }
  // todo знаю проблему
  @action changeTaskStatus(id) {
    this.todos = this.todos.filter(a => a.tasks.find(b => b.complete = (b.id === id) ? true : false));
  }
}
