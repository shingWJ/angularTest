import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.css']
})
export class AppIndexComponent implements OnInit {
  navs: string[] = ['全部', '热荐', '电影', '电视剧', '少儿', '综艺', '纪实', '生活', '法治', '游戏', '体育', '理财'];
  constructor() { }

  ngOnInit() {
  }

  turn2Subject() {
  	window.location.href='http://172.26.31.69:22305/epg/hdvod/biz_25392605/category/ccms_category_38955164/item/subject/128668.do?pi=1&lfid=id_img_style_2';
  }

}
