import { TestBed } from '@angular/core/testing';

import { ResaleSuccessService } from './resale-success.service';

describe('ResaleSuccessService', () => {
  let service: ResaleSuccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResaleSuccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
