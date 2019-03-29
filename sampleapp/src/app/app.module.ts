import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropyComponent } from './dropy/dropy.component';
import { DrpDirective } from './dropy/drp.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropyComponent,
    DrpDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
