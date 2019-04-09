import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { RecentsComponent } from './recents/recents.component';
import { RecentComponent } from './chat/recent/recent.component';

@NgModule({
  declarations: [ChatlistComponent, RecentsComponent, RecentComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
