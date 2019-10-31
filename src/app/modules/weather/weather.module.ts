import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './component/weather/weather.component';
import {WeatherService} from './service/weather.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    HttpClientModule,
  ],
  bootstrap: [WeatherComponent]
})
export class WeatherModule { }
