import { Component } from '@angular/core';

@Component({
  selector: 'app-spiner-modal',
  templateUrl: './spiner.html',
  styleUrls: ['./spiner.css']
})

export class SpinerComponent {
  show: boolean;
  constructor() {
    this.show = false;
  }
}
