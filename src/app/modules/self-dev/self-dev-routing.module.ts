import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelfDevComponent} from './component/self-dev/self-dev.component';

const router: Routes = [{
  path: '',
  component: SelfDevComponent
}];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})

export class SelfDevRouning {}
