import { Component, OnInit } from '@angular/core';
import {ContentService} from '../service/content.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  menuList: string[];
  item: string;

  constructor(
    public contentService: ContentService
  ) { }

  ngOnInit() {
    this.menuList = this.contentService.menuItems;
  }

  changeMenu(event) {
    this.contentService.menuItems.push(event);
  }
  deleteMe(event) {
    this.contentService.menuItems.filter(a => ((event === a) ? console.log(a) : false));
  }
}
