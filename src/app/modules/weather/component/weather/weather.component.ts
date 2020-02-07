import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherStore } from '../../store/weather.state';
import { fromMobx } from 'ngx-mobx';
import {CitesWeatherInterface, CityWeatherInterface} from '../../models/cityWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather$: Observable<any>;
  weather: CityWeatherInterface;
  city$: Observable<any>;
  city: CitesWeatherInterface;

  constructor(
    public weatherStore: WeatherStore
  ) {}

  ngOnInit() {
    this.weather$ = fromMobx( () => this.weatherStore.weather);
    this.weather$.subscribe(
      res => {
        this.weather = res;
        // console.log(this.weather);
        },
      err => console.log(err)
    );
    this.city$ = fromMobx(() => this.weatherStore.cites);
    this.city$.subscribe(
      res => console.log(res)
    );
    // console.log(this.city$);
  }

  loadWeather(city) {
    this.weatherStore.getWeather(city);
  }

  click(event) {
    console.log(event);
  }

}
