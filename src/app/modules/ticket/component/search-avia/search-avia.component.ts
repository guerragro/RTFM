import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../store/states/app.state';
import * as fromCitiesAction from '../../store/actions/cities.action';
import icons from 'glyphicons';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {CitiesStateInterface} from '../../store/states/cities.state';
import {TicketService} from '../../service/ticket.service';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-avia.component.html',
  styleUrls: ['./search-avia.component.css']
})
export class SearchAviaComponent implements OnInit {

  icons = icons;
  cities: any;

  origin: string = 'владивосток';
  destination: string = 'Лос-Анджелес';

  constructor( private store: Store<fromAppState.AppTicketState>,
               private service: TicketService
               ) {}

  ngOnInit() {
    this.store.dispatch( new fromCitiesAction.addCities() );
    this.store.select('cities').subscribe(res => console.log(res));
    this.store.subscribe(res => console.log(res));
    this.service.getPriceMonth().subscribe(res => console.log(res));
  }
//  стыковка, если стыковка больше одной, то ищем другие даты
//  если рейс прямой, ищем промежуточные, которые можно потратить на дополнительный отдых

  search() {}

  dataHandle(ans) {
    (ans.hasOwnProperty('origin')) ? console.log(ans) : console.log('Неправильно введенные города');
  }
}
