import {TestBed} from '@angular/core/testing';

import {AreaThemeService} from './area-theme.service';

describe('AreaThemeService', () => {
  let service: AreaThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
