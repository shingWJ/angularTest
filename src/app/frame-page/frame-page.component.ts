import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame-page',
  templateUrl: './frame-page.component.html',
  styleUrls: ['./frame-page.component.css']
})
export class FramePageComponent implements OnInit {

 iframe: any;

  constructor(private router: Router,
  				private domSanitizer: DomSanitizer) {
  	window['child'] = this;
  }

  ngOnInit() {
  	this.iframe = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:4200/assets/test1.html');
  }

  turn() : void {
  	this.router.navigate(['/index']);
  }

}
