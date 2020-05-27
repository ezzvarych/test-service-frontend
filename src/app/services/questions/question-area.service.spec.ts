import {TestBed} from '@angular/core/testing';

import {QuestionAreaService} from './question-area.service';

describe('QuestionAreaService', () => {
  let service: QuestionAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
