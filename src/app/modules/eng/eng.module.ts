import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EngRoutingModule} from './eng-routing.module';
import {EngComponent} from './component/eng/eng.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EngComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EngRoutingModule
  ],
  providers: [],
  bootstrap: [
    EngComponent
  ]
})
export class EngModule { }
