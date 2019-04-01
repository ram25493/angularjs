import { Directive, HostBinding, HostListener, ElementRef, Renderer2, Input  } from '@angular/core';

@Directive({
  selector: '[brdsh]'
                  
  
})
export class BrdshDirective {

 //  @Input()

 // brd : any = '1px solid red' ;
 // shadow :any;

  constructor(
    private elRef : ElementRef,
    private renderer : Renderer2
  ) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.myborder('5px solid green' , '10px 10px 5px grey' )
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.myborder('1px solid green' , null )
  }
  
     

 private myborder(brd : any, shd : any){
  this.elRef.nativeElement.style.border = brd; 
  this.elRef.nativeElement.style.boxShadow = shd; 

 }

}
