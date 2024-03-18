import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { AuthStoreService } from '../store/auth.store.service';

export const authCleanupGuard: CanDeactivateFn<unknown> = () => {
  inject(AuthStoreService).cleanup();

  return true;
};
