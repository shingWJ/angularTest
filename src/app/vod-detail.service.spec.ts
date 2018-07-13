import { TestBed, inject } from '@angular/core/testing';

import { VodDetailService } from './vod-detail.service';

describe('VodDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VodDetailService]
    });
  });

  it('should be created', inject([VodDetailService], (service: VodDetailService) => {
    expect(service).toBeTruthy();
  }));
});
