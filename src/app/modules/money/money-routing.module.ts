import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoneyComponent} from './component/money/money.component';

const router: Routes = [{
  path: '',
  component: MoneyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(router)]
})

export class MoneyRoutingModule {}
