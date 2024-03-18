import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthStoreService } from '../store/auth.store.service';

export const authLoadUserResolver: ResolveFn<boolean> = (
  route,
  state,
  authStoreService: AuthStoreService = inject(AuthStoreService)
) => {
  const userId = route.paramMap.get('userId') as string;
  authStoreService.loadUserById(userId);
  return true;
};
