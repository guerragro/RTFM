import { Injectable } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromAction from '../store/action';
import {TODO_ACTION} from '../store/action';
import {mergeMap, map} from 'rxjs/operators';

@Injectable()
export class TodoEffect {
  todo: any;
  constructor(
    public service: TodoService,
    public $action: Actions
  ) {}
  @Effect()
  loadTodo = this.$action.pipe(
    ofType(TODO_ACTION.TODO_GET),
      mergeMap(() => this.service.getTodo().pipe(
        map(todo => new fromAction.GETTODOSUCCESS(todo))
      ))
  );
}
