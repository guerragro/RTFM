import { TestBed } from '@angular/core/testing';

import { SelfDevService } from './self-dev.service';

describe('SelfDevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfDevService = TestBed.get(SelfDevService);
    expect(service).toBeTruthy();
  });
});
