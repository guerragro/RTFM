import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../modal/dialog.component";

export interface DialogData {
  name: string;
  number: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data = {
    name: 'Петров Василий Александрович',
    number1: '08:00 - 17:00'
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.data
    });

    dialogRef.afterClosed().subscribe(res => console.log('this dialog was closed'))
  }

}
