import { TestBed } from '@angular/core/testing';

import { SentenceApiServiceService } from './sentence-api-service.service';

describe('SentenceApiServiceService', () => {
  let service: SentenceApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentenceApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
