import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store';

import { TodoComponent } from './component/todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';

import { todoReducer } from './store/todo.selector';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    StoreModule.forRoot(todoReducer)
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
