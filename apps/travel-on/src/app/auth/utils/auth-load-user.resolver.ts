import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthStore } from '../store/store';

export const authLoadUserResolver: ResolveFn<boolean> = (
  route,
  state,
  authStore = inject(AuthStore)
) => {
  const userId = route.paramMap.get('userId') as string;
  console.log(userId);
  authStore.loadUserById(userId);
  return true;
};
