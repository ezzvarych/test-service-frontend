import {JwtInterceptor} from './jwt-interceptor';

describe('JwtInterceptor', () => {
  it('should create analysis instance', () => {
    expect(new JwtInterceptor()).toBeTruthy();
  });
});
