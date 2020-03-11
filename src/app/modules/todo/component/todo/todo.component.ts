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
    this.store.select('todos').subscribe(res => this.todoList = res['todo']);
    console.log(this.todoList);
  }

  // Todo проверка на пустую строку;
  // Todo проверка на количество символов, либо делать переност слова;
  add(event) {
    if (event.keyCode === 13 || event.type === 'click') {
      const todo = new Todo(this.todo, this.id++, false, false);
      this.store.dispatch(new fromAction.addTodo(todo));
      this.todo = '';
    }
  }

  delete(id) {
    this.store.dispatch( new fromAction.delTodo(id) );
  }

  // // TODO сделать какую нибудь анимацию;
  // done(id) {
  //   this.store.dispatch( new fromAction.doneTodo(id) );
  // }

  // TODO нужны фиксы
  edit(id) {
    console.log(id);
    this.todoList = this.todoList.filter((a) => (a.id === id) ? a.edit = true : this.todoList);
    console.log(this.todoList.filter(a => (a.id === id) ? true : false));
    // this.store.dispatch( new fromAction.editTodo(task, id) );
  }
}
// https://github.com/mashish584/ngrx-todo-app-example/blob/master/src/app/store/reducers/todo.reducers.ts
