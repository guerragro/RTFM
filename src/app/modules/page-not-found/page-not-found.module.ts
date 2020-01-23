import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
