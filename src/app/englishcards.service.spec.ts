import { TestBed, inject } from '@angular/core/testing';

import { EnglishcardsService } from './englishcards.service';

describe('EnglishcardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnglishcardsService]
    });
  });

  it('should be created', inject([EnglishcardsService], (service: EnglishcardsService) => {
    expect(service).toBeTruthy();
  }));
});
