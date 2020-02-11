import { TestBed } from '@angular/core/testing';

import { ReadMeService } from './readme.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadMeService = TestBed.get(ReadMeService);
    expect(service).toBeTruthy();
  });
});
