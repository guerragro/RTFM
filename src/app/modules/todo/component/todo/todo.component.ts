import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/action';
import { Todo, ToDo } from '../../model/todo';
import {Observable} from 'rxjs';
import {EditModalComponent} from './modal/edit';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild(EditModalComponent)
  editModalComponent: EditModalComponent;

  todo: string;
  todoList: Observable<ToDo[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.select('todos').subscribe(res => this.todoList = res);
    this.store.dispatch(new fromAction.GETTODO());
    console.log(this.todoList);
  }

  add(event) {
    if (event.keyCode === 13 || event.type === 'click') {
      if (this.todo === '') {
        alert('Задача не может быть пустой');
      } else {
        const todo = new Todo(this.todo, this.todoList['id']++);
        this.store.dispatch(new fromAction.ADDTODO(todo));
        this.todo = '';
      }
      console.log(this.todoList['id']);
    }
  }

  remove(todo) {
    this.store.dispatch( new fromAction.REMOVETODO(todo) );
  }

  done(todo) {
    this.store.dispatch( new fromAction.DONETODO(todo) );
  }

  edit(todo, view?) {
    this.dialog.open(EditModalComponent);
    // this.editModalComponent.open(todo);
    // if (!todo.edit) {
    //   todo.todo = this.todo;
    //   this.store.dispatch( new fromAction.editTodo(todo));
    // } else {
    //   this.todo = todo.todo;
    // }
    // const parent = document.getElementById('todo') as HTMLInputElement;
    // this.store.dispatch( new fromAction.editTodo(todo));
  }

  changeOn(event) {
    this.store.dispatch(new fromAction.EDITTODO(event));
  }
}
// https://github.com/mashish584/ngrx-todo-app-example/blob/master/src/app/store/reducers/todo.reducers.ts
// https://github.com/GarryBrown/ngrx-films-list
