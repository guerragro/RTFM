import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogData} from "../parent/parent.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  panelOpenState = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

  ngOnInit() {
  }

}
