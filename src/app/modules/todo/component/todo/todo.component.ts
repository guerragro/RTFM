import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/action';
import { Todo, ToDo } from '../../model/todo';
import icons from 'glyphicons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  icons = icons;
  todo: string;
  todoList: ToDo[];
  id = 1;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromAction.getTodo());
    this.store.select('todos').subscribe(res => this.todoList = res['todo']);
    this.store.subscribe(res => console.log(res));
  }

  add(event) {
    if (event.keyCode === 13 || event.type === 'click') {
      const todo = new Todo(this.todo, this.id++);
      this.store.dispatch(new fromAction.addTodo(todo));
      this.todo = '';
    }
  }

  remove(id) {
    this.store.dispatch(new fromAction.removeTodo(id));
  }

  done(id) {
    this.store.dispatch( new fromAction.doneTodo(id) );
  }

  edit(id, view?) {
    // TODO насколько правильно эти вещи вставлять в HTML код и стоит ли выдергивать value подобный образом?
    const test = document.getElementById('todo') as HTMLInputElement;
    console.log(test.value);
    this.store.dispatch( new fromAction.editTodo(test.value, id));
  }
}
// https://github.com/mashish584/ngrx-todo-app-example/blob/master/src/app/store/reducers/todo.reducers.ts
// https://github.com/GarryBrown/ngrx-films-list
