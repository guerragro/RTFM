import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: any;
  time: any;
  timeSeoul: any;

  constructor() {
    console.log('main component');
    this.getTimes();
  }

  //https://overcoder.net/q/1078696/angular-2-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D1%82%D0%B5%D0%BA%D1%83%D1%89%D1%83%D1%8E-%D0%BE%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%83%D1%8E-%D0%B4%D0%B0%D1%82%D1%83
  // offset = (new Date).getTimezoneOffset() * 6000
  // publish_timestamp_local = server_timestamp - offset // - (-1080000) = +1080000
  getTimes() {
    this.date = new Date();
    // this.date = Observable.interval(1000).map(x => new Date()).share();
    this.time = this.date.getHours() + ' : ' + this.date.getMinutes() + ' : ' + this.date.getSeconds();
    // this.timeSeoul = this.date.getHours()  + ' : ' + this.date.getMinutes() + ' : ' + this.date.getSeconds();
    // window.setTimeout(arguments.callee, 1000);
    // console.log(this.timeSeoul);
  }
}
