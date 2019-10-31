import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { WeatherModule } from './modules/weather/weather.module';
import { MenuModule } from './modules/menu/menu.module';
import {TodoModule} from './modules/todo/todo.module';
import {TicketModule} from './modules/ticket/ticket.module';
import {TicTacToeModule} from './modules/tic-tac-toe/tic-tac-toe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TodoModule,
    MenuModule,
    WeatherModule,
    TicketModule,
    TicTacToeModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
