import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent} from './component/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {TourOfHeroesRouting} from './tour-of-heroes.routing.module';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {HeroService} from './service/hero.service';
import {MessagesService} from './service/messages.service';
import {MessagesComponent} from './component/messages/messages.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TourOfHeroesRouting
  ],
  exports: [],
  providers: [
    HeroService,
    MessagesService
  ]
})
export class TourOfHeroesModule { }
