import { NgModule } from '@angular/core';
import {CalculatorComponent} from './component/calculator/calculator.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CalculatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalculatorRoutingModule {}
