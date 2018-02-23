import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessengerComponent} from './messenger/messenger.component';

export const routes: Routes = [
	{
		path: 'messenger',
		component: MessengerComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
	exports: [ RouterModule ]
})
export class SharedRoutingModule {}
