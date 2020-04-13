import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit.html',
  styleUrls: ['./edit.css']
})

export class EditModalComponent implements OnInit {

  @Output()
  changeOn = new EventEmitter();

  showWindows: boolean;

  constructor() {
  }
  ngOnInit() {
    this.showWindows = false;
  }

  public open(todo) {
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
