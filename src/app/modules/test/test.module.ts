import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import {StoreModule} from '@ngrx/store';
import {TestStore} from './store/mobx.store';
import {Service} from './service/service';
import {HttpClientModule} from '@angular/common/http';
// import {reducers} from './store';
import { ChildComponent } from './component/child/child.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers)
  ],
  providers: [
    TestStore,
    Service,
    HttpClientModule
  ],
  bootstrap: [ParentComponent]
})
export class TestModule { }

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule.forChild(WaresInfoRoutes),
//
//     SharedModule,
//
//     PopoverModule,
//     TooltipModule,
//   ],
//   declarations: [
//     WaresInfoComponent
//   ],
//   providers: [
//     WaresInfoService
//   ]
// })
