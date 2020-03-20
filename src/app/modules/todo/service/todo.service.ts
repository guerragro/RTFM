import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {Observable, of} from 'rxjs';

@Injectable()

export class TodoService {
  constructor() {}

  getTodo(): Observable<any> {
    return of([
        new Todo('Решить проблему присвоение id', 0),
        new Todo('Решить проблему редактирование задачи', 1),
        new Todo('Добавить счетчик активных задач', 2),
        new Todo('Поправить структуру и код', 3),
      ]);
  }
}
