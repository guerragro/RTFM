import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/action';
import { Todo, ToDo } from '../../model/todo';
import icons from 'glyphicons';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  icons = icons;
  todo: string;
  _todo: string;
  todoList: Observable<ToDo[]>;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.select('todos').subscribe(res => this.todoList = res);
    this.store.dispatch(new fromAction.getTodo());
    console.log(this.todoList);
  }

  add(event) {
    if (event.keyCode === 13 || event.type === 'click') {
      console.log(this.todoList['id']);
      const todo = new Todo(this.todo, this.todoList['id']++);
      this.store.dispatch(new fromAction.addTodo(todo));
      this.todo = '';
    }
  }

  remove(todo) {
    this.store.dispatch( new fromAction.removeTodo(todo) );
  }

  done(todo) {
    this.store.dispatch( new fromAction.doneTodo(todo) );
  }

  edit(todo, view?) {
    // передаем всю задачу
    // TODO насколько правильно эти вещи вставлять в HTML код и стоит ли выдергивать value подобный образом?
    // const test = document.getElementById('todo') as HTMLInputElement;
    // console.log(test.value);
    this.store.dispatch( new fromAction.editTodo(todo));
  }
}
// https://github.com/mashish584/ngrx-todo-app-example/blob/master/src/app/store/reducers/todo.reducers.ts
// https://github.com/GarryBrown/ngrx-films-list
