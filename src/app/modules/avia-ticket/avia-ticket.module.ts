import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import {AviaTicketRoutingModule} from './avia-ticket-routing.module';
import {AviaTicketService} from './service/avia-ticket.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/app.rudecer';
import {EffectsModule} from '@ngrx/effects';
import {CitiesEffect} from '../ticket/store/effects/cities.effect';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AviaTicketRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CitiesEffect])
  ],
  providers: [
    HttpClientModule,
    AviaTicketService,
  ]
})
export class AviaTicketModule {}
