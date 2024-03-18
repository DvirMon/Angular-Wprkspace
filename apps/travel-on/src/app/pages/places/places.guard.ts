import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { Observable, from, of, switchMap } from 'rxjs';
import { AuthStoreService } from '../../auth/store/auth.store.service';

export const placesGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state,
  authStoreService: AuthStoreService = inject(AuthStoreService),
  router: Router = inject(Router)
) => {
  return authStoreService.isStorageLogged().pipe(
    switchMap((logged: boolean) =>
      logged ? onLoggedTrue() : onLoggedFalse(router)
    )
  );
};

function onLoggedTrue() {
  return of(true);
}

function onLoggedFalse(router: Router): Observable<boolean> {
  return from(router.navigateByUrl('/'));
}
