import { Injectable } from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CITIES_ACTION} from '../actions/cities.action';
import {map, mergeMap} from 'rxjs/operators';
import * as fromCitiesAction from '../actions/cities.action';

@Injectable()
export class CitiesEffect {
  constructor(
    public ticketService: TicketService,
    public action$: Actions
  ) {}

  @Effect()
  loadCities = this.action$.pipe(
    ofType(CITIES_ACTION.ADD_CITIES),
    mergeMap( () => this.ticketService.getDataCities().pipe(
      map( cities => new fromCitiesAction.addCitiesOk(cities))
    ))
  );
}
