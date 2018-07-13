import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros = HEROS;
  @Output() onSelected = new EventEmitter<Hero>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(hero: Hero) {
  	this.onSelected.emit(hero);
  }

  animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }

  fetch2Detail(code: string): void {
    this.router.navigate(['/vodDetail',code]);
  }

}
