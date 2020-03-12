import {Component, OnInit} from '@angular/core';
import {appRoutes} from '../../../../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: any;
  altmenu: boolean = true;

  constructor() { }

  ngOnInit() {
    this.fillmenulist();
  }

  fillmenulist() {
    this.altmenu = !this.altmenu;
    this.menuList = (this.altmenu) ? appRoutes.filter(project => project['path'] !== 'menu') :
      appRoutes.filter(project => project['path'] !== 'menu' && project['path'] !== 'site' && project['path'] !== 'Zen-wallet'
      && project['path'] !== 'Тест'
      );
  }
}
