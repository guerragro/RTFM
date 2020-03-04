import { Component, OnInit } from '@angular/core';
import {AviaTicketService} from '../../service/avia-ticket.service';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/states/app.state';
import {addCities} from '../../store/actions/city.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city: any;
  country: any;

  constructor(
    public service: AviaTicketService,
    public store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.store.dispatch( new addCities());
    this.store.subscribe(res => console.log(res));
    // this.service.getDataCities().subscribe(res => {
    //   console.log('города', res);
    //   this.city = res;
    // });
    // this.service.getDataCountry().subscribe(res => {
    //   console.log('страны', res);
    //   this.country = res;
    // });
  }

  search() {
    console.log(this.city.filter(a => a.name === 'Владивосток'));
  }

}
