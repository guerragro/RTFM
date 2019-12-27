import {Injectable} from '@angular/core';

@Injectable()
export class Service {
  constructor() {
  }

  test(): string {
    return 'hello';
  }
}
