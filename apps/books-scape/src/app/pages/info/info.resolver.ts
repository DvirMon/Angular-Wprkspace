import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Info } from '../../books/info.t';
import { AppStore } from '../../store/store';

export const infoResolver: ResolveFn<Info> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  inject(AppStore).loadVolumeInfo(route.paramMap.get('id')!);
  return inject(AppStore).volInfo()[0];
};
