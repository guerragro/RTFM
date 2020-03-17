import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {Observable, of} from 'rxjs';

@Injectable()

export class TodoService {
  constructor() {}

  getTodo(): Observable<any> {
    return of([
        new Todo('Решить проблему присвоение id', 0),
        new Todo('Решить проблему редактирование задачи', 0),
        new Todo('Добавить счетчик активных задач', 1),
        new Todo('Поправить структуру и код', 2),
      ]);
  }
}
