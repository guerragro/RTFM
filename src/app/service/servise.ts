import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServiceWeather {
  constructor(
    private http: HttpClient
  ) {}

  public getWeather() {
   return this.http.get('https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589');
  }
}
