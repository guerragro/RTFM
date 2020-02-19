import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherStore } from '../../store/weather.store';
import { fromMobx } from 'ngx-mobx';
import {WeatherInterface} from '../../models/cityWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  name: string;
  city: any;
  cities$: Observable<any>;
  cities: WeatherInterface[];

  constructor(
    public weatherStore: WeatherStore
  ) {}

  ngOnInit() {
    this.cities$ = fromMobx(() => this.weatherStore.cities);
    this.cities$.subscribe(
      res => {
        this.cities = res;
        console.log(this.cities);
      },
      err => console.log(err)
    );
  }

  loadWeather(city) {
    this.weatherStore.getWeather(city);
  }

  showWeather(id) {
    this.city = this.cities.filter(a => a.id === id);
    // console.log(this.city);
  }
  delete(id) {
    this.cities.forEach((a, index) => (a.id === id) ? this.cities.splice(index, 1) : this.cities);
  }

}
