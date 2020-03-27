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
    this.menuList = (this.altmenu) ? appRoutes.filter(proj => proj['path'] !== 'menu' && proj['path'] !== '') :
      appRoutes.filter(proj => proj['path'] !== 'menu' && proj['path'] !== 'site' && proj['path'] !== 'Zen-wallet'
      && proj['path'] !== 'Тест' && proj['path'] !== ''
      );
  }
}
