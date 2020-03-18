import { Injectable } from '@angular/core';
import { action, observable} from 'mobx';
import { ReadMeService } from '../service/readme.service';
import { ProjectWorld, ProjectWorldInterface, ToDoWorld} from '../../../models/todo.model';

@Injectable()
export class ReadMeStore {

  @observable todos: ProjectWorldInterface[] = [];

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
      this.todos.filter(a => (a.id === id) ? a.tasks.push( new ToDoWorld(1, data)) : false);
    } else {
      // todo есть проблема с добаление новой задачи у нового проекта, problem in id
      // добавление проекта
      this.todos.push(new ProjectWorld(id, data));
    }
  }
  // todo знаю проблему
  @action changeTaskStatus(id) {
    this.todos = this.todos.filter(a => a.tasks.find(b => b.done = (b.id === id) ? true : false));
  }
}
