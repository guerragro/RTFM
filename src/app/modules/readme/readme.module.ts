import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReadmeComponent} from './component/readme/readme.component';
import {ReadmeRoutingModule} from './readme-routing.module';
import {FormsModule} from '@angular/forms';
import {ReadMeService} from './service/readme.service';
import {ReadMeStore} from './store/readMeStore';

@NgModule({
  declarations: [
    ReadmeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadmeRoutingModule
  ],
  providers: [
    ReadMeService,
    ReadMeStore
  ],
  bootstrap: [
    ReadmeComponent
  ]
})
export class ReadMeModule { }
