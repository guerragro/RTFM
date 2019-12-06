import { Injectable } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import {action, observable} from 'mobx';
import { CityWeatherInterface } from '../models/cityWeather';

@Injectable()
export class WeatherStore {

  dataCity: CityWeatherInterface;

  @observable weather: CityWeatherInterface[] = [];
  constructor( public weatherService: WeatherService) {}

  @action getWeather(data) {
    this.weatherService.getDataWeather(data).subscribe(
      res => {
        // this.weather = res;
        this.fillWeatherInfo(res);
        // console.log(res);
      },
      err => console.log(err)
    );
  }
  fillWeatherInfo(ans) {
    console.log(ans);
    const city: any = ans;
    this.dataCity = {
      // https://www.cy-pr.com/tools/time/
      'ВОСХОД': city.sys.sunrise,
      'ЗАКАТ': city.sys.sunset,
      'СКОРОСТЬ ВЕТРА': city.wind.speed + ' м/с',
      'ОБЛАЧНОСТЬ': city.weather[0].description,
      'ВЛАЖНОСТЬ': city.main.humidity + '%',
      'ДАВЛЕНИЕ': city.main.pressure * 0.75 + ' мм рт. ст.',
      'ТЕМПЕРАТУРА': city.main.temp,
      id: null,
      visible: false,
      'tooltip': this.makeWeatherTooltip(city),
    };
    // console.log(this.dataCity);
    // this.weather = this.dataCity;
    this.weather.push(this.dataCity);
  }
  makeWeatherTooltip(city: any): string {
    return 'Координаты: ' +
      city.coord.lon + ' долготы ' +
      city.coord.lat + ' широты ';
  }
}
