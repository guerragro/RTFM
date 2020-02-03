import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {PoeComponent} from './poe/poe.component';

const routes: Routes = [{
  path: '',
  component: PoeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PoeRouting{}
