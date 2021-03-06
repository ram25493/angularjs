import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DropEvent } from '../app.component';

@Component({
  selector: 'app-color-picker',
  template: `
  <div class="dropdown show">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
    </button>
    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" (click)="pickOne(1)">Red</a>
      <a class="dropdown-item" (click)="pickOne(2)">Green</a>
      <a class="dropdown-item" (click)="pickOne(3)">Blue</a>
    </div>
  </div>
  `,
  styles: []
})
export class ColorPickerComponent implements OnInit {

  @Output()
  picked: EventEmitter<DropEvent> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  pickOne(pos: number) {
    let evObj: DropEvent = {} as DropEvent
    evObj.position = pos
    if (pos == 1) {
      evObj.color = 'red'
    } else if (pos == 2) {
      evObj.color = 'green'
    }else {
      evObj.color = 'blue'
    }

    this.picked.emit(evObj)
  }
}


