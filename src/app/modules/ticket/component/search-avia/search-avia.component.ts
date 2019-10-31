import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import * as fromCitiesAction from '../../store/actions/cities.action';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-avia.component.html',
  styleUrls: ['./search-avia.component.css']
})
export class SearchAviaComponent implements OnInit {

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(
      res => console.log(res)
    );
    this.store.dispatch( new fromCitiesAction.addCities() );
  }

}
