import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './component/todo/todo.component';
import { TodoReducer } from './store/todo.reducer';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    StoreModule.forRoot(TodoReducer)
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
