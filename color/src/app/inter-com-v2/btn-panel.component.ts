import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../services/demo-service.service';

@Component({
  selector: 'app-btn-panel',
  template: `
  <div class="row">
  <div class="mx-auto" style="width: 200px;">
   <div class="col-md-12">
     <input (click)="clk(1)" type="button" class="btn btn-primary" value="Plus">
     <input (click)="clk(2)" type="button" class="btn btn-primary" value="Minus">
   </div>
   </div>
  </div>
  `,
  styles: []
})
export class BtnPanelComponent implements OnInit {

  constructor(

    private data: DemoServiceService
  ) { }

  ngOnInit() {
  }

  clk(wh: number) {
    if (wh == 1) {

      this.data.incEm()

    } else {

      this.data.decEm()

    }
  }
}