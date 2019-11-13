import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../store/states/app.state';
import * as fromCitiesAction from '../../store/actions/cities.action';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-avia.component.html',
  styleUrls: ['./search-avia.component.css']
})
export class SearchAviaComponent implements OnInit {

  constructor( private store: Store<fromAppState.AppTicketState>) { }

  ngOnInit() {
    this.store.dispatch( new fromCitiesAction.addCities() );
    this.store.subscribe(
      res => console.log(res)
    );
  }
//  стыковка, если стыковка больше одной, то ищем другие даты
//  если рейс прямой, ищем промежуточные, которые можно потратить на дополнительный отдых


}
