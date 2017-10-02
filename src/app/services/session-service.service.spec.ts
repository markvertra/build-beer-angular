import { TestBed, inject } from '@angular/core/testing';

import { SessionServiceService } from './session-service.service';

describe('SessionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionServiceService]
    });
  });

  it('should be created', inject([SessionServiceService], (service: SessionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
