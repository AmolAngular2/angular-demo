import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicStyle]'
})
export class DynamicStyleDirective {
  @HostBinding('innerText') text!:string;
  constructor(private el:ElementRef,private ren:Renderer2) { }

  @HostListener('mouseover')
  onMouseHover(){
    this.ren.addClass(this.el.nativeElement,'heading');
    this.text = "Product List Example";
  }

  @HostListener('mouseout')
  onMouseLeave(){
    this.ren.removeClass(this.el.nativeElement,'heading');
    this.text = "Product List";
  }



}
