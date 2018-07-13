import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuHighLight]'
})
export class MenuHighLightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onfocus() {
  	this.el.nativeElement.style.backgroundColor = 'yellow';
  	this.el.nativeElement.style.color = 'red';
  	this.el.nativeElement.style.border = '1px solid blue';
  	this.el.nativeElement.style.borderRadius = '10px';
  }

  @HostListener('blur') onblur() {
    this.el.nativeElement.style.backgroundColor = '#ccc';
  	this.el.nativeElement.style.color = 'white';
  	this.el.nativeElement.style.border = '';
  	this.el.nativeElement.style.borderRadius = '';
  }
}
