import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeComponent } from './poe/poe.component';
import {FormsModule} from '@angular/forms';
import {PoeRouting} from './poe-routing';

@NgModule({
  declarations: [PoeComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoeRouting
  ]
})
export class PoeModule { }
