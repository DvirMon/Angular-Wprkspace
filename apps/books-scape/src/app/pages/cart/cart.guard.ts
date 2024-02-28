import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { AppSignalSore } from "../../store/store";

export const cartGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  store = inject(AppSignalSore)
) => {
  return store.cart().length != 0;
};
