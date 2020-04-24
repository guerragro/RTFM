import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TttComponent } from './component/ttt/ttt.component';
import { ChoiseModalComponent } from './component/ttt/modal/choice';
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    TttComponent,
    ChoiseModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TicTacToeRoutingModule,
    CustomMaterialModule,
  ],
  entryComponents: [ChoiseModalComponent],
  bootstrap: [TttComponent]
})
export class TicTacToeModule { }
