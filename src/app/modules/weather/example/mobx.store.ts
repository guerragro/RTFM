// import { Injectable } from '@angular/core';
// import {action, computed, observable} from 'mobx';
//
// import { SearchService } from '../service/search.service';
// import { CitiesModel } from '../model/model';
//
// // export class Ticket {
// //   constructor
// // }
//
// @Injectable()
// export class MobxStore {
//
//   constructor(
//     public service: SearchService
//   ) {}
//
//   // наше состояние
//   @observable cities: [] = [];
//
//   @observable initState = {
//     // список город
//     cities: [],
//     // здесь будут храниться билеты
//     ticket: {},
//     // специальные предложения, надо выбрать
//     special: []
//   };
//
//   @observable counter: number = 0;
//
//   @action getNumber() {
//     this.counter++;
//   }
//
//   @action getDataCities() {
//     this.service.getDataCities().subscribe(
//       (res: []) => {
//         // this.cities = res;
//         this.initState.cities = res;
//         // console.log(this.cities);
//         console.log(this.initState);
//       },
//       err => console.log(err)
//     );
//   }
//   @action getTest(data) {
//     this.service.getTest(data).subscribe(
//       (res: {}) => this.initState.ticket = res
//     );
//   }
//   @computed get DataCities() {
//     return this.cities;
//   }
//   @computed get InitState() {
//     return this.initState;
//   }
//   @computed get Number() {
//     return this.counter;
//   }
// }
