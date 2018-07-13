import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisabledStyle]'
})
export class DisabledStyleDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onclick() {
  	this.el.nativeElement.style.backgroundColor = '#ccc';
  }

}
