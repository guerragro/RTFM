import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class TodoService {
  constructor(
    public http: HttpClient
  ) {}

  getTodo(): Observable<any> {
    return of([
        new Todo('Решить проблему присвоение id', 0),
        new Todo('Решить проблему редактирование задачи', 1),
        new Todo('Добавить счетчик активных задач', 2),
        new Todo('Поправить структуру и код', 3),
      ]);
  }
  addTodo(todo) {
    return this.http.post('api/todo', {todo: 1});
  }

  updateTodo() {}

  deleteTodo() {}
}
