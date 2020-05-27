import {TestBed} from '@angular/core/testing';

import {UserAnswersHandlingService} from './user-answers-handling.service';

describe('UserAnswersHandlingService', () => {
  let service: UserAnswersHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAnswersHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
