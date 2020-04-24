import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeaBattleRoutingModule } from './sea-battle-routing.module';
import { FieldComponent } from './component/field/field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule,
    SeaBattleRoutingModule,
  ]
})
export class SeaBattleModule { }
