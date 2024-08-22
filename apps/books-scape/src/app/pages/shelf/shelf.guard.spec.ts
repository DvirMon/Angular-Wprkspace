import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shelfGuard } from './shelf.guard';

describe('shelfGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => shelfGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
