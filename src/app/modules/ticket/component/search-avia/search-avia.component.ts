import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../../store/states/app.state';
import * as fromCitiesAction from '../../store/actions/cities.action';
import icons from 'glyphicons';
import {Observable} from 'rxjs';
import {TicketService} from '../../service/ticket.service';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-avia.component.html',
  styleUrls: ['./search-avia.component.css']
})
export class SearchAviaComponent implements OnInit {

  icons = icons;
  cities: any;

  // origin: string = 'владивосток';
  // destination: string = 'Лос-Анджелес';
  origin: any;
  destination: any;
  test: any;

  constructor( private store: Store<fromAppState.AppState>,
               private service: TicketService
               ) {}

  ngOnInit() {
    this.store.dispatch( new fromCitiesAction.addCities() );
    // this.store.select('cities').subscribe(res => console.log(res));
    // this.store.subscribe(res => console.log(res));
    this.service.getSupDirection('VVO').subscribe(res => this.origin = res['directions']);
    this.service.getSupDirection('LAX').subscribe(res => this.destination = res['directions']);
  }

  search() {
    this.test = this.origin.filter(a => this.destination.filter(b => b['iata'] === a['iata']));
    console.log(this.test);
  }

  dataHandle(ans) {
    (ans.hasOwnProperty('origin')) ? console.log(ans) : console.log('Неправильно введенные города');
  }
}
