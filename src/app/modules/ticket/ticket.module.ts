import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { SearchAviaComponent } from './component/search-avia/search-avia.component';
import { StoreModule } from '@ngrx/store';
import {appReducers} from './store/reducers/app.reducer';
import {TicketService} from './service/ticket.service';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {CitiesEffect} from './store/effects/cities.effect';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SearchAviaComponent],
  imports: [
    CommonModule,
    RouterModule,
    TicketRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CitiesEffect])
  ],
  providers: [
    TicketService,
    HttpClientModule
  ],
  bootstrap: [SearchAviaComponent]
})
export class TicketModule { }
