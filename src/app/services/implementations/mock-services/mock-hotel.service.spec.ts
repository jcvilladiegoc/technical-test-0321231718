import { TestBed } from '@angular/core/testing';

import { MockHotelService } from './mock-hotel.service';

describe('MockHotelService', () => {
  let service: MockHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
