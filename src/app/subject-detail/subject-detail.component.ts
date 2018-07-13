import { Component, OnInit } from '@angular/core';
import { VodDetailService } from '../vod-detail.service';
import { Subscription } from 'rxjs/Subscription';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Subjectpage } from './subjectpage';
import { Subjectarea } from './subjectarea';
import { SubjectDetail } from './subjectDetail';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  
  subscription: Subscription;
  subjectDetail: SubjectDetail;
  subjectpage: Subjectpage;
  subjectareas: Subjectarea[];

  constructor(private vodDetailService: VodDetailService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.getSubjecttDetail('ccms_subjectpage_12738544');
  }

  getSubjecttDetail(code: string) {
  	this.subscription = this.vodDetailService.getSubject(code)
  		.subscribe((data: SubjectDetail) => {
  			//console.log('111' + JSON.stringify(data));
  			this.subjectDetail = {
  			status: data['status'],
  			subjectpage: data['subjectpage'],
  			subjectareas: data['subjectareas']
  			}
  			this.subjectpage = this.subjectDetail.subjectpage;
  			this.subjectareas = this.subjectDetail.subjectareas;
  			console.log('222' + JSON.stringify(this.subjectareas));
  		},
  		error => console.log(error))
  }

  getBackgroud(uri: string): any {
  	return this._sanitizer.bypassSecurityTrustStyle('url("'+ 'http://172.26.31.69:22305'+ uri + '")');
  }

  setPosition(location: string,position: number): any{
    let locations = location.split(',');
    //console.log(333 + locations.toString());
    // let style = 'top: ' + location[0] + 'px;left: ' + location[1] + 'px;width: '
    //   + location[2] + 'px;height:' + location[3] + 'px;';
    switch (position) {
      case 0:
      case 1:
        return this._sanitizer.bypassSecurityTrustStyle(locations[position]);
        //break;
      case 2:
        let width = parseInt(locations[position]) - parseInt(locations[0]);
        return this._sanitizer.bypassSecurityTrustStyle(width.toString());
        //break;
      case 3:
        let height = parseInt(locations[position]) - parseInt(locations[1]);
        return this._sanitizer.bypassSecurityTrustStyle(height.toString());
        //break;
      default:
        // code...
        return;
        //break;
    }
    //return  this._sanitizer.bypassSecurityTrustStyle(styleGroup);
  }
}
