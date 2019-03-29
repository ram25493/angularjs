import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDrp]'
})
export class DrpDirective {
  @HostBinding('class.show')
  issh : boolean
constructor(private elRef : ElementRef,
  private rend : Renderer2){
}
@HostListener('click')
drpClick(){
  this.issh=!this.issh
  console.log(this.elRef.nativeElement.childnode.item(1))
  this.elRef.nativeElement.childNode.forEach(el => console.log(el))
  }
}
