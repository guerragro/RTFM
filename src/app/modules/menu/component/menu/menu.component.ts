import { Component, OnInit } from '@angular/core';
import {appRoutes, AppRoutingModule} from '../../../../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: any;

  constructor() { }

  ngOnInit() {
    this.menuList = appRoutes;
    console.log(this.menuList);
    this.fillmenulist();
  }

  fillmenulist() {
    console.log('загружаем меню');
  }

  teleport(event) {
    console.log(event);
  }

}
