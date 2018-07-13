import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appVodPlay]'
})
export class VodPlayDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onfocus() {
  	this.el.nativeElement.children[0].children[0].style.display = 'none';
  	this.el.nativeElement.children[0].children[1].style.display = '';
  	this.el.nativeElement.style.background = 'rgb(160,168,183)';
  }

  @HostListener('blur') onblur() {
    this.el.nativeElement.children[0].children[0].style.display = '';
  	this.el.nativeElement.children[0].children[1].style.display = 'none';
  	this.el.nativeElement.style.background = 'rgb(65,70,81)';
  }

}
