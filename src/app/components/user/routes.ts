import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserAuthGuard} from './user-auth.guard';

export const routes: Routes = [
  {
    path: 'user',
    component: HomeComponent,
    canActivate : [UserAuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
