import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store';

import { TodoComponent } from './component/todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';

import { reducers } from './store/index.reducer';
import {TodoService} from './service/todo.service';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffect} from './store/todo.effect';
import {HttpClientModule} from '@angular/common/http';
import {EditModalComponent} from './component/todo/modal/edit';
import {CustomMaterialModule} from "../custom-material/custom-material.module";

@NgModule({
  declarations: [
    TodoComponent,
    EditModalComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        TodoRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([TodoEffect]),
        CustomMaterialModule
    ],
  providers: [
    TodoService,
    HttpClientModule
  ],
  entryComponents: [EditModalComponent],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
