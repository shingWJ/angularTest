import { Component, OnInit } from '@angular/core';
import { VodDetailService } from '../vod-detail.service';
import { Subscription } from 'rxjs/Subscription';

import { Item } from './item';
import { IndexItem } from './indexItem';
import { Position } from './position';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {
  
  subscription: Subscription;
  items: Item[];
  indexItem: IndexItem;
  positions: Position[];

  constructor(private vodDetailService: VodDetailService) { }

  ngOnInit() {
  	this.getIndex();
  }

  getIndex() {
  	this.subscription = this.vodDetailService.getIndex()
  		.subscribe((data: IndexItem) => {
  			// console.log('111' + JSON.stringify(data));
  			this.indexItem = {
  			result: data['result'],
  			message: data['message'],
  			bizCode: data['bizCode'],
  			categoryCode: data['categoryCode'],
  			templateType: data['templateType'],
  			background: data['background'],
  			positions: data['positions']
  			}
  			this.positions = this.indexItem.positions;
  			 console.log('222' + JSON.stringify(this.positions));
  			this.items = this.positions[1].items.map((item,index) => {
          console.log('333::' + item.itemIndex);
          if(item.itemIndex > 2) {
            return item;
          } else {
            return new Item;
          }
        });
        console.log('222' + JSON.stringify(this.items));
  		},
  		error => console.log(error))
  }

  get2Positon(item: Item): void {
    // if (item.type == 'vod') {
    //   //进播放页
    // } else if (item.type == 'series') {
    //   //进电视剧页
    // } else if (item.type == 'mix') {
    //   //进多语言版本
    // } else if (item.type == 'ablum') {
    //   //进专栏
    // }else if (item.type == 'position') {
    //   //进专辑
    // }

    switch (item.type) {
      case "vod":
        console.log('进播放页');
        break;
      case "series":
        console.log('进电视剧页');
        break;
      case "mix":
        console.log('进多语言版本');
        break;
      case "ablum":
        console.log('进专栏');
        break;
      case "position":
        console.log('进专辑');
        break;
      default:
        // code...
        break;
    }
  }
}
