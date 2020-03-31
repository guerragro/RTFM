import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.html',
  styleUrls: ['./edit.css']
})

export class EditModalComponent implements OnInit {

  showWindows: boolean;
  // todo: object;

  constructor() {
  }
  ngOnInit() {
    this.showWindows = false;
  }

  open(todo) {
    this.showWindows = true;
    // this.todo = todo;
    console.log('form-edit');
  }

  save() {
    this.showWindows = false;
  }
  close() {
    this.showWindows = false;
  }
}
