import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule} from '@ngrx/store';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './component/todo/todo.component';
// import { TodoReducer } from './store/todo.reducer';
import { todoReducer } from './store/todo.selector';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    TodoRoutingModule,
    StoreModule.forRoot(todoReducer)
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
