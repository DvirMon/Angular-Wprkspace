import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth';
import { AuthStore } from '../../auth/store/store';

export const placesGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state,
  authStore = inject(AuthStore),
  authService = inject(AuthService),
  router: Router = inject(Router)
) => {
  const userId = route.paramMap.get('userId') as string;

  authService.isStorageLogged() && authStore.loadUserById(userId);

  return authStore.loaded() || router.navigateByUrl('');
};
