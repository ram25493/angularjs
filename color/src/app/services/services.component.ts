import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[DemoServiceService]
})
export class ServicesComponent implements OnInit {
counter: number=0

  constructor(private dataservice:DemoServiceService) { }

  ngOnInit() {
  }
  clk(nm : number){
    if(nm==1){
     this.counter =this.dataservice.inc()
    }
    else{
      this.counter =this.dataservice.dec()

    }
  }

}
