import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: Date;
  time: string;
  time$;

  constructor() {
    this.getTimes();
  }

  getTimes() {
    const intervalObs = interval(1000);
    intervalObs.subscribe(() => this.date = new Date()
    );
  }
}
