import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { RecentsComponent } from './recents/recents.component';

const routes: Routes = [
  { path:'news', component :ChatlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
