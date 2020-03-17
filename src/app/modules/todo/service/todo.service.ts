import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {Observable, of} from 'rxjs';

@Injectable()

export class TodoService {
  constructor() {}

  getTodo(): Observable<any> {
    // setTimeout(() => of([
    //   new Todo('Изменить ', 0, false, false),
    //   new Todo('Добавить счетчик активных задач', 1, false, false),
    //   new Todo('Поправить структуру', 2, false, false),
    // ]), 5000);
    return of([
        new Todo('Изменить ', 0, false, false),
        new Todo('Добавить счетчик активных задач', 1, false, false),
        new Todo('Поправить структуру', 2, false, false),
      ]);
  }
}
