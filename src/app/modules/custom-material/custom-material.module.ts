import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatInputModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,
  MatGridListModule
} from '@angular/material';
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
