import { Injectable } from '@angular/core';
import { action, observable} from 'mobx';
import { ReadMeService } from '../service/readme.service';

@Injectable()
export class ReadMeStore {

  constructor(
    public service: ReadMeService
  ) {}

  @observable todos = [];

  @action getProject() {
    this.todos = this.service.getProject();
    console.log(this.todos);
  }

}
