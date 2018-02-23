import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessengerComponent} from './messenger/messenger.component';
import {UserAuthGuard} from '../user/user-auth.guard';

export const routes: Routes = [
  {
    path: 'messenger',
    component: MessengerComponent,
    canActivate: [UserAuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class SharedRoutingModule {}
