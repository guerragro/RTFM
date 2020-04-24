import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './component/parent/parent.component';
import { DialogComponent } from './component/modal/dialog.component';
import {FormsModule} from "@angular/forms";
import {TestRoutingModules} from "./test-routing.modules";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {CustomMaterialModule} from "../custom-material/custom-material.module";

@NgModule({
  declarations: [ParentComponent, DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModules,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    CustomMaterialModule
  ],
  bootstrap: [ParentComponent]
})
export class TestModule { }
