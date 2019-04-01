import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor(private el: ElementRef) { 

    this.el.nativeElement.style.border = 'solid 1px black';
  }
 
 
}