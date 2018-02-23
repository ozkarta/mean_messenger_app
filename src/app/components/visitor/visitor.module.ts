import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VisitorNavComponent} from './nav/nav.component';
import {VisitorRoutingModule} from './routes';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';




@NgModule({
	declarations: [
		HomeComponent,
		VisitorNavComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
		VisitorRoutingModule
	],
	exports: [
		VisitorNavComponent
	],
	providers: []
})
export class VisitorModule { }
