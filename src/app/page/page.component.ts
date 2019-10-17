import { Component, OnInit } from '@angular/core';
import {ContentService} from '../service/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page: object;

  constructor(
    public service: ContentService
  ) { }

  ngOnInit() {
    this.page = this.service.pages['home'];
  }

}
