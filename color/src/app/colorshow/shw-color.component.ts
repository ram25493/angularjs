import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../services/demo-service.service';

@Component({
  selector: 'app-shw-color',
  template: `
  <div class="box" [style.background]="clr1">{{clr1}}
  </div>
  `,
  styles: [`
  .box {
    width : 300px;
    height : 300px;
    background-color : #ccc;
  }
`]
})
export class ShwColorComponent implements OnInit {
   private clr1:string
  constructor(
    private data:DemoServiceService
  ) { }

  ngOnInit() {
    this.data.onBox(str => {
      this.clr1 = `${str}`
    })
  }

}
