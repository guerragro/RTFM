import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';
import {NumberInterface} from '../model';

@Injectable()
export class TestStore {

  @observable number: NumberInterface = {number: 1};

  @action upNumber() {
    // this.number++;
  }
}
