import { EventEmitter } from '@angular/core';
import { embeddedViewEnd } from '@angular/core/src/render3';
import { strictEqual } from 'assert';

export class DemoServiceService {
  private color:string
  private str:EventEmitter<string> = new EventEmitter()
  private cnt: number = 0
  private em: EventEmitter<Number> = new EventEmitter()
  inc() {
    return ++this.cnt
  }
  dec() {
    return --this.cnt
  }


  incEm() {
    if (this.cnt < 100) {
      this.em.emit(this.cnt = this.cnt + 5)
    }
  }
  decEm() {
    if (this.cnt > 0) {
      this.em.emit(this.cnt = this.cnt - 5)
    }
  }

  onProgress(cb: (prg: number) => void) {

    this.em.subscribe(cnt => cb(cnt))
  }

  pickred() {
      this.str.emit(this.color='red')
  }

  pickgreen() {
      this.str.emit(this.color='green')
  }
  pickblue() {
      this.str.emit(this.color='blue')
  }
  onBox(cp : (col:string)=>void){
    this.str.subscribe(str => cp(str))
  }
}