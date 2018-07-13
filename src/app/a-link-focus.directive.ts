import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appALinkFocus]'
})
export class ALinkFocusDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onfocus() {
  	this.el.nativeElement.style.border = '2px solid #ffea00';
  }

  @HostListener('blur') onblur() {
    this.el.nativeElement.style.border = '';
  }

}
