import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherStore } from '../../store/weather.state';
import { fromMobx } from 'ngx-mobx';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather$: Observable<any>;
  weather: any;

  constructor(
    public weatherStore: WeatherStore
  ) { }

  ngOnInit() {
    this.weatherStore.getWeather();
    this.weather$ = fromMobx( () => this.weatherStore.weather);
    this.weather$.subscribe(
      res => {
        this.weather = res;
        console.log(this.weather);
      }
    );
  }

}
