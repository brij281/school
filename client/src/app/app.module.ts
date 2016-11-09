import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule,Http } from '@angular/http';
import {LoginModule} from './login/login.module';
import {SiteHeader} from './site-header/site-header.component';

import { AppComponent } from './app.component';
//import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeader
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule
   // HttpModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
