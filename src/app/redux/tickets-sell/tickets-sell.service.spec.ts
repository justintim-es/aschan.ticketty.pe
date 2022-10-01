import { TestBed } from '@angular/core/testing';

import { TicketsSellService } from './tickets-sell.service';

describe('TicketsSellService', () => {
  let service: TicketsSellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsSellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
