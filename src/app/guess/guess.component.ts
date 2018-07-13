import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { VodDetailService } from '../vod-detail.service';

import { Guess } from './guess';
import { GuessResponse } from './guessResponse';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  guesses: Guess[];
  @Output() onSelectVod = new EventEmitter<string>();

  constructor(private vodDetailService: VodDetailService,
              private router: Router) { }

  ngOnInit() {
  	this.getGuesses();
  }

  getGuesses(): void {
  	this.vodDetailService.getDataFromServer('/epg/api/guessContent.json?action=byTag&condition=好莱坞,经典,特技,悬疑,大片&size=6&mainFolder=电影&hdType=1')
  		.subscribe((data: GuessResponse) => {
  			this.guesses = data.guesslist;
  		},
  		error => console.log(error));
  }

  guessLink(code: string): void {
    //return '/vodDetail/' + code;
    console.log("code:"+ code);
    // this.router.navigate(['/vodDetail',code]);
    this.onSelectVod.emit(code);
  }

}
