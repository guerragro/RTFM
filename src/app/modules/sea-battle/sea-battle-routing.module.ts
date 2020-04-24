import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FieldComponent} from "./component/field/field.component";

const routes: Routes = [{
  path: '',
  component: FieldComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaBattleRoutingModule { }
