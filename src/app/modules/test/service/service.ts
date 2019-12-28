import {Injectable} from '@angular/core';

@Injectable()
export class Service {
  name: string = 'hello world';
  constructor() {
  }

  test(): string {
    return this.name;
  }
}
