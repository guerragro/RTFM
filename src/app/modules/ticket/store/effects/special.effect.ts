import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TicketService} from '../../service/ticket.service';
import {SPECIAL_ACTION} from '../actions/special.action';
import {mergeMap, map} from 'rxjs/operators';
import * as fromSpecialAction from '../actions/special.action';

@Injectable()
export class SpecialEffect {
  constructor(
    public service: TicketService,
    public $action: Actions
  ) {}
  @Effect()
  loadSpecial = this.$action.pipe(
    ofType(SPECIAL_ACTION.ADD_SPECIAL),
    mergeMap(() => this.service.getCityDirection().pipe(
      map(special => new fromSpecialAction.addSpecialSuccess(special))
    ))
  );
}
