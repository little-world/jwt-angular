import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {UserComponent} from './user/user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {loginInterceptorProviders} from "./login.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [loginInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
