import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModel } from './url.model';

@Injectable()
export class WeatherService {
  constructor( public http: HttpClient) {}

  public getDataWeather(city) {
    const params = {
      q: city,
      APPID: '2eb215277860b4ab40b5fba49ab71c2e'
    };
    return this.http.get(UrlModel.getWeather, {params: (params)});
  }
}
