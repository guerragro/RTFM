import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/test.action';
import {Observable} from 'rxjs';
import {TestStore} from '../../store/mobx.store';
import {fromMobx} from 'ngx-mobx';
import {NumberInterface} from '../../model';
import {Service} from '../../service/service';
import {State} from '../../store/test.reducer';
import icons from 'glyphicons';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  icons = icons;
  test = false;

  todoList = [
    {
      id: 1,
      task: "hello world",
      edit: false
    },
    {
      id: 1,
      task: "temp world",
      edit: false
    },
  ];

  // store: Store<State>;
  // model = new NumberModel();

  number$: Observable<NumberInterface>;

  error: any;

  constructor(
    public mobxStore: TestStore,
    public service: Service
  ) {
    this.number$ = fromMobx(() => this.mobxStore.number);
  }

  ngOnInit() {
    // console.log(this.number$);
    // this.number$.subscribe(res => console.log(res));
    // this.store.subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );
    // this.test$ = fromMobx(() => this.mobxStore.number);
    // this.test$.subscribe(res => this.test = res);
    // this.store.subscribe(
    //   res => console.log(res)
    // );
  }

  handleErr(ans) {
    // this.error = ans;
    // console.log(this.error['error']['text']);
  }

  upNumber() {
    // this.mobxStore.upNumber();
    // this.model = new NumberModel('1', ['2']);
    // console.log(this.model);
    // this.store.dispatch ( new fromAction.add(this.test) );
  }

  click(event) {
    console.log(event);
  }

  edit(id) {
    console.log(this.test);
    this.test = !this.test;
    console.log(this.test);
    // this.todoList.forEach(a => (a.id === id) ? a.edit = true : false);
    // console.log(this.todoList);
  }

}



// only JS самый первый опыт написания todo-list
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
