import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './component/heroes/heroes.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TourOfHeroesRouting {}
