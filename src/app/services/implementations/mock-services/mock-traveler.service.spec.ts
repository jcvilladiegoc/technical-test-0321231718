import { TestBed } from '@angular/core/testing';

import { MockTravelerService } from './mock-traveler.service';

describe('MockTravelerService', () => {
  let service: MockTravelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTravelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
