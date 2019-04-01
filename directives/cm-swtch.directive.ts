import { SimpleChanges, Directive, ElementRef, Renderer2, HostListener, TemplateRef, ViewContainerRef ,Input, OnChanges, SimpleChange} from '@angular/core';


@Directive({
  selector: '[CmSwtch]'
})
export class CmSwtchDirective  {

  @Input()
  days: any =[
    {value : 1, day : 'Monday'},
    {value :2, day : 'Tuesday'},
    {value :3, day : 'Wed'},
    {value :4, day : 'Thu'},
    {value :5, day:'Fri'},
    {value :6, day : 'Sat'},
    {value :7, day : 'Sunday'}
  ]

  constructor(
    private tmRef : TemplateRef<any>,
    private vcRef : ViewContainerRef

  ) { }

ngOnChanges(ch : SimpleChanges){

  

  }
}
