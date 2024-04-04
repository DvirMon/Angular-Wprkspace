import { FormGroup } from '@angular/forms';
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  EMPTY,
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  pipe,
  switchMap,
} from 'rxjs';
import {
  runInInjectionContext,
  inject,
  Injector,
  ProviderToken,
} from '@angular/core';
import { Entity } from '@angular-architects/ngrx-toolkit';

export interface OptionChanged {
  key: string;
  query: string;
}

export type Loader<Entity, MethodName extends string> = {
  [K in MethodName]: (args: string) => Observable<Entity[]>;
};

export type LoaderService<Loader> = ProviderToken<Loader>;

export function createOptionsLoader(
  Loader: LoaderService<Loader<Entity, string>>,
  methodName: string
): (args: string) => Observable<Entity[]> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: string) => loader[methodName](query);
  });
}

export function registerGroupOptions(
  group: FormGroup
): Observable<OptionChanged> {
  const observables$ = Object.keys(group.controls).map((key: string) =>
    group.controls[key].valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((value) => ({ key: key, query: value }))
    )
  );

  return merge(...observables$);
}

export function handleGroupOptions(
  loader: (args: string) => Observable<Entity[]>,
  state: StateSignal<object>
) {
  return rxMethod<OptionChanged>(
    pipe(
      switchMap(({ query, key }) =>
        loader(query).pipe(
          tapResponse({
            next: (data) => patchState(state, { [key]: data }),
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
