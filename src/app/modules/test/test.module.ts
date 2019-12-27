import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './component/test/test.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/test.reducer';
import {TestStore} from './store/mobx.store';
import {Service} from './service/service';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    // StoreModule.forRoot(reducer),
  ],
  providers: [
    TestStore,
    Service
  ],
  bootstrap: [TestComponent]
})
export class TestModule { }
