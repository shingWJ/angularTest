import { Injectable } from '@angular/core';
import { Hero } from './heros/hero';

@Injectable()
export class SelectServiceService {
  
  selectedHeroes: Hero[] = [];
  radiantHeroes: Hero[] = [];
  direHeroes: Hero[] = [];
  constructor() { }

  addHero(hero: Hero): void {
  	let length = this.selectedHeroes.length;
    if (this.isBPicked(hero)) {
      return;
    }
  	if (length >= 10) {
  		return;
  	}
  	if ( length == 0 || length == 3 || length == 4 || length == 7 || length == 8) {
  		this.radiantHeroes.push(hero);
  	} else {
  		this.direHeroes.push(hero);
  	}
  	this.selectedHeroes.push(hero);
  }

  getHeroes(): Hero[] {
  	return this.selectedHeroes;
  }

  getRadiantHeroes(): Hero[] {
  	return this.radiantHeroes;
  }

  getDireHeroes(): Hero[] {
  	return this.direHeroes;
  }

  isBPicked(hero: Hero): boolean {
    if (this.selectedHeroes.findIndex(function(val){
      return val == hero;
    }) > 0) {
      return true;
    } else {
      return false;
    }
  }
}
