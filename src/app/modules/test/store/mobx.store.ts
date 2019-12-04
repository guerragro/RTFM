import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';

@Injectable()
export class TestStore {

  @observable number: number = 1;

  @action upNumber() {
    this.number++;
  }
}
