import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { WeatherModule } from './modules/weather/weather.module';
import {MenuModule} from './modules/weather/component/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MenuModule,
    WeatherModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
