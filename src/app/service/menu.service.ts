import { Injectable } from '@angular/core';

export interface MenuItem {
  item: string;
  route: string;
  // возможные подменю
  // submenu?: Array<MenuItem>;
}

@Injectable()

export class MenuService {
  items: Array<MenuItem>;
}
