import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../store/states/app.state';
import * as fromCitiesAction from '../../store/actions/cities.action';
import icons from 'glyphicons';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {CitiesStateInterface} from '../../store/states/cities.state';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-avia.component.html',
  styleUrls: ['./search-avia.component.css']
})
export class SearchAviaComponent implements OnInit {

  icons = icons;
  cities: any;

  departure: string;
  arrival: string;

  constructor( private store: Store<fromAppState.AppTicketState>) { }

  ngOnInit() {
    this.store.dispatch( new fromCitiesAction.addCities() );
    this.store.subscribe(
      res => this.cities = res
    );
  }
//  стыковка, если стыковка больше одной, то ищем другие даты
//  если рейс прямой, ищем промежуточные, которые можно потратить на дополнительный отдых

  search() {
    console.log(this.cities);
    this.departure = this.cities.citi.filter(a => a.name);
  }
}
