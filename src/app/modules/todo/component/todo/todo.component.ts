import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
// import * as fromState from '../../store/todo.reducer';
import * as fromAction from '../../store/todo.action';
import { TodoState } from '../../store/todo.reducer';
import { Todo, TodoModel } from '../../model/todo';
import {filter} from 'rxjs/operators';
import {from} from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: string;
  todoList: any;
  id: number = 1;

  constructor(
    private store: Store<TodoState>
  ) { }

  ngOnInit() {
    this.store.subscribe(
      res => {
        this.todoList = res['todos']['todos'];
        console.log(res);
      },
      err => console.log(err)
    );
  }

  add(todo) {
    // Todo проверка на пусткую строку;
    if (todo !== undefined) {
      this.store.dispatch( new fromAction.addTodo( new Todo(todo, this.id++, false)));
      this.todo = null;
      console.log(this.todo);
    } else {
      alert('Может стоит ввести задачу');
    }
  }

  delete(id, task) {
    if (task === 'DELETE') {
      this.store.dispatch( new fromAction.delTodo(id) );
    } else if (task === 'DONE') {
      this.store.dispatch( new fromAction.doneTodo(id) );
    }
  }

  done(id) {
    // TODO сделать какую нибудь анимацию;
    this.store.dispatch( new fromAction.doneTodo(id) );
  }

  show(event) {
    console.log(event);
  }

  edit(task, id) {
    this.store.dispatch( new fromAction.editTodo(task, id) );
  }
}

// https://github.com/mashish584/ngrx-todo-app-example/blob/master/src/app/store/reducers/todo.reducers.ts

// only JS
// _div: any;
// _task: any;
// elem: any;
// delButton: any;
// doneButton: any;
// parent: any;
//
// public task = [];
//
// test: any;
// arr: any;
//
// constructor() {
// }
//
// ngOnInit() {
// }
//
// // создаем массив в него пушим все задачи, используем сеттер и геттер, через который то-до лист будет постоянно обновляться
//
//
// // function create task
// create() {
//   this._task = document.getElementById('Task');
//   if (this._task.value === '') {
//     // block the button if the element is empty
//     this.successTask = null;
//   } else {
//     // create Div
//     this._div = document.createElement('div');
//     this._div.innerHTML = this._task.value;
//     this._div.className = 'task-list';
//     // create button and event for delete task
//     this.delButton = document.createElement('input');
//     this.delButton.type = 'button';
//     this.delButton.id = 'del';
//     this.delButton.className = 'del';
//     this.delButton.value = 'В корзину';
//     this.delButton.onclick = this.deleteTask;
//     // create button and event for success task
//     this.doneButton = document.createElement('input');
//     this.doneButton.type = 'button';
//     this.doneButton.id = 'done';
//     this.doneButton.className = 'done';
//     this.doneButton.value = 'Выполнено';
//     this.doneButton.onclick = this.successTask;
//     //
//     this.parent = document.getElementById('parent');
//     this.parent.appendChild(this._div);
//     this._div.appendChild(this.delButton);
//     this._div.appendChild(this.doneButton);
//     // массив с задачами
//     // this.task.push(this._task.value);
//     // после ввода задачи очищаем поле
//     this._task.value = '';
//   }
// }
//
// // function clear task
// clear() {
//   this._task.value = '';
// }
//
// // function success task
// // How to edit done the task?
// successTask() {
//   console.log('Success task');
//   // this.elem = document.getElementById()
//   // this.elem = document.getElementsByClassName()
//   // if (elem.style.textDecoration === 'line-through') {
//   //   elem.style.textDecoration = 'none';
//   // } else {
//   //   elem.style.textDecoration = 'line-through';
//   // }
// }
//
// // function delete task
// // How delete the task?
// deleteTask() {
//   // this.elem = document.getElementsByClassName('del');
//   // this.elem = document.getElementById('del');
//   this.elem = document.getElementsByClassName('task-list');
//   // this.elem.remove();
//   console.log(this.elem);
// }
//
// // const div = document.getElementsByClassName('task-list');
// // // превратили HTMLCollection в массив
// // // var arr = [].slice.call(div);
// // this.arr = Array.from(div);
// // this.arr = this.arr.forEach(a => console.log(a.innerText));
//
// // delete all task
// // removeall() {
// //   this.elem = document.querySelector('.task-list');
// //   this.elem.parentNode.remove();
// // }
