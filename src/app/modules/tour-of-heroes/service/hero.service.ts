import { Injectable } from '@angular/core';
import {HEROES} from '../model/heroes';
import {Hero} from '../model/hero';
import { Observable, of } from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessagesService
  ) { }

  gertHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
