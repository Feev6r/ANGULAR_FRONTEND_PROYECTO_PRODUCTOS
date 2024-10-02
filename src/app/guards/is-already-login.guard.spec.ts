import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isAlreadyLoginGuard } from './is-already-login.guard';

describe('isAlreadyLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAlreadyLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
