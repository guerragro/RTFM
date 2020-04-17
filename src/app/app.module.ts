import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './modules/custom-material/custom-material.module';
import {SpinerComponent} from './modules/spiner/spiner';

@NgModule({
  declarations: [
    AppComponent,
    SpinerComponent
  ],
  imports: [
    PageNotFoundModule,
    BrowserModule,
    FormsModule,
    // CustomMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
