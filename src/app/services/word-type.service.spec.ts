import { TestBed } from '@angular/core/testing';

import { WordTypeService } from './word-type.service';

describe('WordTypeService', () => {
  let service: WordTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
