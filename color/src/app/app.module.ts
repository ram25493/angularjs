import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SimpleBoxComponent } from './info-box/simple-box.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyJumboComponent } from './my-jumbo/my-jumbo.component';
import { InterComponentCommunicationV1Component } from './inter-component-communication-v1/inter-component-communication-v1.component';
import { ColorPickerComponent } from './inter-component-communication-v1/color-picker.component';
import { ColorResultComponent } from './inter-component-communication-v1/color-result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorderDirective } from './border.directive';
import { ShadowDirective } from './shadow.directive';
import { SwitchComponent } from './switch/switch.component';
import { DaysComponent } from './days/days.component';
import { ServicesComponent } from './services/services.component';
import { DemoServiceService } from './services/demo-service.service';
import { InterComV2Component } from './inter-com-v2/inter-com-v2.component';
import { BtnPanelComponent } from './inter-com-v2/btn-panel.component';
import { ProgPanelComponent } from './inter-com-v2/prog-panel.component';
import { ColorshowComponent } from './colorshow/colorshow.component';
import { PickComponent } from './colorshow/pick.component';
import { ShwColorComponent } from './colorshow/shw-color.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    SimpleBoxComponent,
    DataBindingComponent,
    MyJumboComponent,
    InterComponentCommunicationV1Component,
    ColorPickerComponent,
    ColorResultComponent,
    BorderDirective,
    ShadowDirective,
    SwitchComponent,
    DaysComponent,
    ServicesComponent,
    InterComV2Component,
    BtnPanelComponent,
    ProgPanelComponent,
    ColorshowComponent,
    PickComponent,
    ShwColorComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
