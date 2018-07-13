import { TestBed, inject } from '@angular/core/testing';

import { SelectServiceService } from './select-service.service';

describe('SelectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectServiceService]
    });
  });

  it('should be created', inject([SelectServiceService], (service: SelectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
