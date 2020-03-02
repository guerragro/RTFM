import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/todo.action';
import { TodoState } from '../../store/todo.reducer';
import { Todo, TodoModel } from '../../model/todo';
import {filter} from 'rxjs/operators';
import {from} from 'rxjs';
import icons from 'glyphicons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  icons = icons;
  todo: string;
  todoList: TodoModel[];
  id = 1;

  constructor(
    private store: Store<TodoState>
  ) { }

  ngOnInit() {
    this.store.subscribe(
      res => {
        this.todoList = res['todos']['todos'];
        // console.log(this.todoList);
      },
      err => console.log(err)
    );
  }

  // Todo проверка на пустую строку;
  // Todo проверка на количество символов, либо делать переност слова;
  add(todo) {
    if (todo.keyCode === 13 || todo.type === 'click') {
      this.store.dispatch(new fromAction.addTodo(new Todo(this.todo, this.id++, false, false)));
      this.todo = null;
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
    // this.store.dispatch( new fromAction.editTodo(task, id) );
  }


}
// https://github.com/mashish584/ngrx-todo-app-example/blob/master/src/app/store/reducers/todo.reducers.ts
