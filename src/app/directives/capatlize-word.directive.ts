import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapatlizeWord]'
})
export class CapatlizeWordDirective {

  constructor(private el:ElementRef,private ren:Renderer2) { }

  @HostListener('input',["$event.target.value"])
  capatlizeContent(value:any){
    // console.log("val",value.toUpperCase());
     const val = value.toUpperCase();
     this.ren.setProperty(this.el.nativeElement,'value',val);
  } 

}
