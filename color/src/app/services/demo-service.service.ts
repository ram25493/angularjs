import { EventEmitter } from '@angular/core';

export class DemoServiceService {

  private cnt: number = 0
  private em: EventEmitter<Number>= new EventEmitter()
  inc() {
    return ++this.cnt
  }
  dec() {
    return --this.cnt
  }
  
  
  incEm() {
    if(this.cnt<100){
    this.em.emit(this.cnt=this.cnt+5)
    }
  }
  decEm() {
    if(this.cnt>0){
    this.em.emit(this.cnt=this.cnt-5)
    }
  }

  onProgress(cb: (prg: number) => void) {
    
    this.em.subscribe(cnt => cb(cnt))
  }
}
