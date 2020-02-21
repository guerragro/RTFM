import { Component, OnInit } from '@angular/core';
import {SelfDevService} from '../../self-dev.service';

@Component({
  selector: 'app-self-dev',
  templateUrl: './self-dev.component.html',
  styleUrls: ['./self-dev.component.css']
})
export class SelfDevComponent implements OnInit {

  self: string[] = [];

  constructor(
    public service: SelfDevService
  ) { }

  ngOnInit() {
    this.self = this.service.getSelfTask();
    console.log(this.self)
  }
}
