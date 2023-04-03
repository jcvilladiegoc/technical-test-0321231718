import { TestBed } from '@angular/core/testing';

import { MockRoomService } from './mock-room.service';

describe('MockRoomService', () => {
  let service: MockRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
