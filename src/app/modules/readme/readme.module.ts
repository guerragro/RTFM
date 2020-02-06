import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReadmeComponent} from './component/readme/readme.component';
import {ReadmeRoutingModule} from './readme-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ReadmeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadmeRoutingModule
  ],
  bootstrap: [
    ReadmeComponent
  ]
})
export class ReadMeModule { }
