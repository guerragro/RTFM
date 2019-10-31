import { Injectable } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import {action, observable} from 'mobx';

@Injectable()
export class WeatherStore {

  @observable weather: any;
  constructor( public weatherService: WeatherService) {}

  @action getWeather() {
    this.weatherService.getDataWeather('London').subscribe(
      res => {
        this.weather = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
