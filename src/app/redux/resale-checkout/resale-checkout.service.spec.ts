import { TestBed } from '@angular/core/testing';

import { ResaleCheckoutService } from './resale-checkout.service';

describe('ResaleCheckoutService', () => {
  let service: ResaleCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResaleCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
