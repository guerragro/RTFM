import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginRoutingModule} from './login-routing.module';
import {FormsModule} from '@angular/forms';
import {LoginService} from './service/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    LoginService
  ]
})
export class LoginModule { }
