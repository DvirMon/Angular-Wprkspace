import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { StoreService } from 'src/app/shared/store.service';

export const cartGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  storeService = inject(StoreService)) => {
  return !!storeService.selectCart().length;
};
