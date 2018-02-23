import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UserNavComponent} from './nav/nav.component';
import {UserRoutingModule} from './routes';
import {UserAuthGuard} from './user-auth.guard';




@NgModule({
	declarations: [
		HomeComponent,
		UserNavComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
		UserRoutingModule
	],
	exports: [
		UserNavComponent
	],
	providers: [
		UserAuthGuard
	]
})
export class UserModule { }
