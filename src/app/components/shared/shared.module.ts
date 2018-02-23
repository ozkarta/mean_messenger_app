import {NgModule} from '@angular/core';
import {NavComponent} from './nav/nav.component';
import {MessengerComponent} from './messenger/messenger.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VisitorModule} from '../visitor/visitor.module';
import {UserModule} from '../user/user.module';
import {SharedRoutingModule} from './routes';




@NgModule({
	declarations: [
		MessengerComponent,
		NavComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
		SharedRoutingModule,

		VisitorModule,
		UserModule
	],
	exports: [NavComponent],
	providers: []
})
export class SharedModule { }
