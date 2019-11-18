import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAviaComponent } from './component/search-avia/search-avia.component';

const routes: Routes = [{
  path: '',
  component: SearchAviaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
