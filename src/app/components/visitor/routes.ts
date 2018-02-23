import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {VisitorAuthGuard} from './visitor-auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [VisitorAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [VisitorAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [VisitorAuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class VisitorRoutingModule {}
