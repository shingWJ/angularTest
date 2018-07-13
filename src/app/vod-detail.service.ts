import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VodDetail } from './film-detail/vodDetail';

////"target":"http://172.26.31.69:22305"

//本地："target":"http://localhost:80"
//湖南：http://172.26.31.69:20945

@Injectable()
export class VodDetailService {

  constructor(private http: HttpClient) { }

  getVodDetail(code: string) {
  	return this.http.get('epg/api/vod/' + code +'.json');
  }

  getMixDetail(code: string) {
  	return this.http.get('epg/api/mix/' + code +'.json');
  }

  getIndex(){
    return this.http.get('epg/ott/biz_09452497.main');
  }

  getSubject(code: string) {
    return this.http.get('/epg/api/subjectpage/' + code + '.json');
  }

  getDataFromServer(url: string) {
  	return this.http.get(url);
  }
}
