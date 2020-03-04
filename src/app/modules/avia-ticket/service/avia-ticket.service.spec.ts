import { TestBed } from '@angular/core/testing';

import { AviaTicketService } from './avia-ticket.service';

describe('AviaTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AviaTicketService = TestBed.get(AviaTicketService);
    expect(service).toBeTruthy();
  });
});
