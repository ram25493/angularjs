import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path :'login' ,loadChildren:'./login/login.module#LoginModule'},
  {path :'dashboard' ,loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  {path :'signup' ,loadChildren:'./signup/signup.module#SignupModule'},
  {path :'chat' ,loadChildren:'./chat/chat.module#ChatRoutingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
