import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  MenuItems: object[] = [{path: 'weather'}, {path: 'todo'}];

  constructor() { }

  ngOnInit() {
  }

}
