import { Injectable } from '@angular/core';
import { action, observable} from 'mobx';
import { ReadMeService } from '../service/readme.service';
import { ProjectInterface} from '../model';

@Injectable()
export class ReadMeStore {

  @observable todos: ProjectInterface[] = [];

  constructor(
    public service: ReadMeService
  ) {}

  @action getDataProject() {
    this.todos = this.service.getProject();
    console.log(this.todos);
  }

  @action addTask() {
    console.log('new task');
  }

}
