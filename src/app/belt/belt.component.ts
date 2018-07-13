import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belt',
  templateUrl: './belt.component.html',
  styleUrls: ['./belt.component.css']
})
export class BeltComponent implements OnInit {

  belts: string[];
  leftShown: string;
  rightShown: string;

  constructor() { }

  ngOnInit() {
  	this.belts = ['强档好莱坞','院线','全部','动作','动画','喜剧','科幻','惊悚','情感'];
  	this.leftShown = 'none';
  	this.rightShown = '';
  }


  focus2Show(index: number): void{
  	if (this.leftShown == 'none') {
  		if (index < (this.belts.length -1)) {
  			this.leftShown = 'none';
  			this.rightShown = '';
  		} else {
  			this.leftShown = '';
  			this.rightShown = 'none';
  		}
  	} else {
  		if (index == 1) {
  			this.leftShown = 'none';
  			this.rightShown = '';
  		} else {
  			this.leftShown = '';
  			this.rightShown = 'none';
  		}
  	}
  }

}
