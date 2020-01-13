import { Component, OnInit } from '@angular/core';
import {Hero} from '../../model/hero';
import {HEROES} from '../../model/heroes';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes;
  selectedHero: Hero;

  constructor(
    private service: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.service.gertHeroes().subscribe(
      res => this.heroes = res
    );
    console.log(this.heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
