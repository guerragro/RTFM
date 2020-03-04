import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AviaTicketService } from '../../service/avia-ticket.service';
import { CITY_ACTION } from '../actions/city.action';
import {map, mergeMap} from 'rxjs/operators';
import * as fromCityAction from '../actions/city.action';

@Injectable()
export class CityEffect {
  constructor(
    private action$: Actions,
    private service: AviaTicketService
  ) {}

  @Effect()
  loadCities = this.action$.pipe(ofType(CITY_ACTION.ADD_CITY),
    mergeMap(() => this.service.getDataCities().pipe(
      map(city => new fromCityAction.addCitiesOk(city)))
  ));
}
