// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
//
// import { AppComponent } from './app.component';
// import { SearchService } from './service/search.service';
// import { SearchComponent } from './search/search.component';
//
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { appReducers } from './store/reducers/app.reducers';
// import { CitiesEffect } from './store/effects/cities.effects';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     SearchComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule,
//     // регистрируем редакс и все редьюсеры
//     StoreModule.forRoot(appReducers),
//     EffectsModule.forRoot([CitiesEffect])
//   ],
//   providers: [
//     SearchService,
//     HttpClientModule,
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
