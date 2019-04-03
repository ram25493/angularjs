import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../services/demo-service.service';

@Component({
  selector: 'app-prog-panel',
  template: `
    <br>
    <br>
    <div class="row jumbotron">
      <div class="col-md-12">
        <div class="progress">
          <div class="progress-bar" role="progressbar" [style.width]="progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{progress}}</div>
        </div>
      </div>
      </div>
  `,
  styles: []
})
export class ProgPanelComponent implements OnInit {

  progress : string='0%'

  constructor(

     private data :DemoServiceService
  ) { }

  ngOnInit() {
    this.data.onProgress(prg => {
      this.progress = `${prg}%`
      console.log(this.progress)
    })
  }
}