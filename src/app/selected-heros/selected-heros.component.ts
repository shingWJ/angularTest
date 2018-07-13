import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectServiceService } from '../select-service.service';
import { Hero } from '../heros/hero';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
} from '@angular/animations';

@Component({
  selector: 'app-selected-heros',
  templateUrl: './selected-heros.component.html',
  styleUrls: ['./selected-heros.component.css'],
  animations: [
    trigger('flyIn',[
      state('in',style({transform: 'scale(1)'})),
      transition('void => *',[
        animate(300,
          style({transform: 'scale(0.1)'}),
        )
      ])
    ])
  ]
})
export class SelectedHerosComponent implements OnInit, OnDestroy {
  
  SelectedHeroes: Hero[] = [];
  radiantHeroes: Hero[] = [];
  direHeroes: Hero[] = [];

  constructor(private selectServiceService: SelectServiceService) { }

  getHeroes(): void {
  	this.SelectedHeroes = this.selectServiceService.getHeroes();
  	this.radiantHeroes = this.selectServiceService.getRadiantHeroes();
  	this.direHeroes = this.selectServiceService.getDireHeroes();
  }

  ngOnInit() {
  	this.getHeroes();
    console.log('init...');
  }

  onSelected(hero: Hero): void {
  	this.selectServiceService.addHero(hero);
  }

  ngOnDestroy() {
    console.log('destroy...');
  }
}
