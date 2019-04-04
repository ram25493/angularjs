import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../services/demo-service.service';

@Component({
  selector: 'app-pick',
  template: `
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" (click)="pickone(1)">Red</a>
    <a class="dropdown-item" (click)="pickone(2)">Green</a>
    <a class="dropdown-item" (click)="pickone(3)">Blue</a>
    </div>
  </div>
  `,
  styles: []
})
export class PickComponent implements OnInit {

  constructor(
    private demo : DemoServiceService
  ) { }

  ngOnInit() {
  }
  pickone(wh:number){
    if(wh == 1){
      this.demo.pickred()
    }else if(wh==2){
      this.demo.pickgreen()
    }
    else if(wh==3){
      this.demo.pickblue()
    }
  }

}
