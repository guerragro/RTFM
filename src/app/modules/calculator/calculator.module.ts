import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorRoutingModule} from './calculator-routing.module';
import {CalculatorComponent} from './component/calculator/calculator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalculatorRoutingModule
  ],
  providers: [],
  bootstrap: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
