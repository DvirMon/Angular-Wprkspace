import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { AppStore } from '../../store/store';

export const shelfGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  store = inject(AppStore),
  router = inject(Router)
): Observable<boolean> => {
  return store.shelfEntities().length != 0 ? onTrue() : onFalse(router);
};

function onTrue(): Observable<boolean> {
  return of(true);
}

function onFalse(router: Router): Observable<boolean> {
  return from(router.navigateByUrl('/'));
}
