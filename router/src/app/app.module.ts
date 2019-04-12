import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JavaComponent } from './dashboard/java/java.component';
import { PythonComponent } from './dashboard/python/python.component';
import { CPlusPlusComponent } from './dashboard/c-plus-plus/c-plus-plus.component';
import { PearlComponent } from './dashboard/pearl/pearl.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    JavaComponent,
    PythonComponent,
    CPlusPlusComponent,
    PearlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
