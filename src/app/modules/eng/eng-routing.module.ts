import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngComponent } from '../site/eng/eng.component';

const routes: Routes = [{
  path: '',
  component: EngComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EngRoutingModule {}
