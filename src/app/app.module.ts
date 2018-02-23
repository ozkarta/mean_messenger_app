import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {SharedModule} from './components/shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routes';
import {ChatService} from './service/ws-chat.service';
import {WebSocketService} from './service/ws.service';
import {AppService} from './service/app.service';
import {UserService} from './service/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,

    SharedModule,
		AppRoutingModule
  ],
  providers: [
    WebSocketService,
    ChatService,
    AppService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
