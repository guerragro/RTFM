import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfDevComponent } from './component/self-dev/self-dev.component';
import { SelfDevRouning } from './self-dev-routing.module';

@NgModule({
  declarations: [SelfDevComponent],
  imports: [
    CommonModule,
    SelfDevRouning
  ]
})
export class SelfDevModule { }
