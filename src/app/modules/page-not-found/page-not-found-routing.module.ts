import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

// определем маршрут
const routes: Routes = [
//   {
//   path: '**',
//   component: PageNotFoundComponent
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
