import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JavaComponent } from './dashboard/java/java.component';
import { PythonComponent } from './dashboard/python/python.component';
import { CPlusPlusComponent } from './dashboard/c-plus-plus/c-plus-plus.component';
import { PearlComponent } from './dashboard/pearl/pearl.component';

const dashRoutes : Routes =[
  {path: 'java', component:JavaComponent},
  {path: 'python', component:PythonComponent},
  {path: 'cplus', component:CPlusPlusComponent},
  {path: 'pearl', component:PearlComponent}]
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dash', component:DashboardComponent,
  children: dashRoutes
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  