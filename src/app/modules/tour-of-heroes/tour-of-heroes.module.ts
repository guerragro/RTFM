import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent} from './component/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {TourOfHeroesRouting} from './tour-of-heroes.routing.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    TourOfHeroesRouting
  ],
  exports: [],
  providers: []
})
export class TourOfHeroesModule { }
