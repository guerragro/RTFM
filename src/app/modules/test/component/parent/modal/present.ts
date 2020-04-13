import { Component } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.html',
  styleUrls: ['./present.css']
})

export class PresentModalComponent {
  showWindow: boolean;
  constructor() {
    this.showWindow = false;
  }
  open() {
    this.showWindow = true;
  }
}
