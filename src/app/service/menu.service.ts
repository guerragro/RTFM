import { Injectable } from '@angular/core';

export interface MenuItems {
  text: string;
  route: string;
}

@Injectable()

export class MenuService {

  items: Array<MenuItems>;

  constructor() {}
}
