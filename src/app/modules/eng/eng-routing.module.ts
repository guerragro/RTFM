import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngComponent } from './component/eng/eng.component';

const routes: Routes = [{
  path: '',
  component: EngComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EngRoutingModule {}
