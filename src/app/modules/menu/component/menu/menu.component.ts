import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fillmenulist();
  }

  fillmenulist() {
    console.log('загружаем меню');
  }

  teleport(event) {
    console.log(event);
  }

}
