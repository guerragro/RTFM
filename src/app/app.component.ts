import { Component } from '@angular/core';
import {MenuService} from './service/menu.service';
import {appMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public menuService: MenuService) {
    menuService.items = appMenuItems;
  }
}
