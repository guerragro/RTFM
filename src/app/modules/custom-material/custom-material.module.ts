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
  MatStepperModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
