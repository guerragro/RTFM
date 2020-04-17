import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherStore } from '../../store/weather.store';
import { fromMobx } from 'ngx-mobx';
import {CityWeatherInterface} from '../../models/cityWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  name: string;
  city: any;
  cities$: Observable<any>;
  cities: CityWeatherInterface[];

  constructor(
    private weatherStore: WeatherStore
  ) {
    this.cities$ = fromMobx(() => weatherStore.cities);
  }

  ngOnInit() {
    this.cities$.subscribe(
      res => this.cities = res,
      err => console.log(err)
    );
  }

  loadWeather(city) {
    // todo выводить сообщение о повторном введение города или неправильно введенном городе
    this.weatherStore.getWeather(city);
    // (this.cities.filter(a => a.name !== city)) ? console.log('Этот город уже есть в вашем списке') : this.weatherStore.getWeather(city);
  }

  showWeather(id) {
    this.city = this.cities.filter(a => a.id === id);
    console.log(this.city);
  }
  delete(id) {
    this.weatherStore.deleteWeather(id);
    // this.cities.forEach((a, index) => (a.id === id) ? this.cities.splice(index, 1) : this.cities);
  }

}
