import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private el: ElementRef) { 
    
    el.nativeElement.style.textShadow = '2px 2px';
}

}
