import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontImageFocus]'
})
export class FontImageFocusDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onfocus() {
  	this.el.nativeElement.style.backgroundColor = '#ffea00';
  	this.el.nativeElement.style.color = 'black';
  	this.el.nativeElement.style.border = '2px solid #ffea00';
  	this.el.nativeElement.lastElementChild.style.backgroundColor='#ffea00';
  }

  @HostListener('blur') onblur() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  	this.el.nativeElement.style.color = 'white';
  	this.el.nativeElement.style.border = '';
  	this.el.nativeElement.lastElementChild.style.backgroundColor='transparent';
  }

}
