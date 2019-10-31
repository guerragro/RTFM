import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    public service: WeatherService
  ) { }

  ngOnInit() {
    this.service.getDataWeather('London').subscribe(
      res => console.log(res)
    );
  }

}
