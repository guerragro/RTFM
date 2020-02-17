import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyComponent } from './component/money/money.component';
import {MoneyRoutingModule} from './money-routing.module';

@NgModule({
  declarations: [MoneyComponent],
  imports: [
    CommonModule,
    MoneyRoutingModule
  ]
})
export class MoneyModule { }
