import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherStore } from '../../store/weather.state';
import { fromMobx } from 'ngx-mobx';
import {CityWeatherInterface} from '../../models/cityWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: string;
  weather$: Observable<any>;
  weather: CityWeatherInterface;

  constructor(
    public weatherStore: WeatherStore
  ) { }

  ngOnInit() {
    this.weather$ = fromMobx( () => this.weatherStore.weather);
    this.weather$.subscribe(
      res => {
        console.log(res);
        this.weather = res;
        },
      err => console.log(err)
    );
  }

  loadWeather(city) {
    this.weatherStore.getWeather(city);
  }

  click(event) {
    console.log(event);
  }

}
