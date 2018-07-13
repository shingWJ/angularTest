import { Component, OnChanges, OnInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { VodDetailService } from '../vod-detail.service';
import { Vod } from './Vod';
import { VodDetail } from './vodDetail';

import { Mix } from './mix';
import { MixProgram } from './mixProgram';
import { MixDetail } from './mixDetail';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnChanges, OnInit, OnDestroy {
  vod: Vod;
  vodDetail: VodDetail;
  mix: Mix;
  mixPrograms: MixProgram[];
  mixDetail: MixDetail;
  initTime: string;
  destroyTime: string;
  subscription: Subscription;
  @Input() public id: string;


  constructor(private vodDetailService: VodDetailService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnChanges(changes: SimpleChanges){
    //this.id = this.route.snapshot.paramMap.get('code');
    console.log('id=' + this.id);
    for (let propName in changes) {  
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

        console.log(curVal);
        console.log(prevVal);
     }
  }

  ngOnInit() {
    //program_ccms_823926
    this.id = this.id ? this.id : this.route.snapshot.paramMap.get('code'); 
    //console.log('id:' + this.route.snapshot.paramMap.keys);
  	this.getVod(this.id);
    //this.getMixDetail(id);
    this.initTime = (new Date()).toString();
    console.log('initTime: ' + this.initTime);
    //window.open(this.initTime);
  }

  getVod(code: string): void {
  	this.subscription = this.vodDetailService.getVodDetail(code)
  		.subscribe((data: VodDetail) => {
  			// console.log('111' + JSON.stringify(data));
  			this.vodDetail = {
  			status: data['status'],
  			vod: data['vod']
  			}
  			this.vod = this.vodDetail.vod;
  			// console.log('222' + JSON.stringify(this.vodDetail.vod));
  		},
  		error => console.log(error))
  }

  getMixDetail(code: string): void {
    this.vodDetailService.getMixDetail(code)
      .subscribe((data: MixDetail) => {
        // console.log('111' + JSON.stringify(data));
        this.mixDetail = {
        status: data['status'],
        mix: data['mix'],
        mixPrograms: data['mixPrograms']
        }
        this.mix = this.mixDetail.mix;
        this.mixPrograms = this.mixDetail.mixPrograms;
        //console.log('222' + JSON.stringify(this.mixDetail));
        //console.log('333' + JSON.stringify(this.mixPrograms));
      },
      error => console.log(error))
  }

  str2Array(str: string): string[] {
  	return str.split(',');
  }

  timeLength(displayTime: string): number {
    let disPlayLength: string;
    let timeStr: string[] = displayTime.split(":");
    let len: number = parseInt(timeStr[0])*60 + parseInt(timeStr[1]);
    return len;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroyTime = (new Date()).toString();
    console.log('destroyTime: ' + this.destroyTime);
    window.open(this.destroyTime);
  }

  onSelectVod(code: string) {
    console.log('test1:' + code);
    this.subscription.unsubscribe();
    this.id = code;
    this.getVod(this.id);
  }

  turn2Bp(){
    this.router.navigate(['/bpSimulation']);
  }

}
