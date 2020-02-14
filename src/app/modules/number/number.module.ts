import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number/number.component';
import {NumberRoutingModule} from './number-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [NumberComponent],
  imports: [
    CommonModule,
    NumberRoutingModule,
    FormsModule
  ]
})
export class NumberModule { }
