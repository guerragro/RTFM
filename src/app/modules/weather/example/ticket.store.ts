// import { Injectable } from '@angular/core';
// import { action, observable, computed } from 'mobx';
//
// import { SearchService } from '../service/ticket.service';
// import {of} from 'rxjs';
// import {CitiesModel, TicketModel} from '../model';
//
// @Injectable()
// export class TicketStore {
//
//   constructor(
//     private _ticketService: SearchService
//   ) {}
//
//   // @observable citiesAll: CitiesModel[] = [
//   //   new CitiesModel('Khabarovsk', 195),
//   //   new CitiesModel('Linengrad', 250)
//   // ];
//   @observable cities;
//
//   @observable ticket;
//
//   @action getDataPrice() {
//     // this._ticketService.getPriceList().subscribe(
//     //   res => {
//     //     this.ticket = res['data'];
//     //     console.log(this.ticket);
//     //   },
//     //   err => console.log(err)
//     // );
//   }
//
//   @action getDataCities() {
//     this._ticketService.getDataCities().subscribe(
//       res => {
//         this.cities = res;
//         // console.log(this.cities);
//       },
//       err => console.log(err)
//     );
//   }
//   @action getUpdateTicket() {
//
//   }
//
//   // @computed get DataCities() {
//   //   return this.cities;
//   // }
// }
