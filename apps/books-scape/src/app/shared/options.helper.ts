import { Entity } from '@angular-architects/ngrx-toolkit';
import {
  Injector,
  ProviderToken,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tapResponse } from '@ngrx/operators';
import { WritableStateSource, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  EMPTY,
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  pipe,
  switchMap
} from 'rxjs';

export interface OptionChanged {
  key: string;
  query: string;
}

export type Loader<T, Entity, MethodName extends string> = {
  [K in MethodName]: (args: T) => Observable<Entity[]>;
};

export type LoaderService<Loader> = ProviderToken<Loader>;

export function createOptionsLoader<T>(
  Loader: LoaderService<Loader<T, Entity, string>>,
  methodName: string
): (args: T) => Observable<Entity[]> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: T) => loader[methodName](query);
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

export function handleGroupOptions<T>(
  loader: (args: T) => Observable<Entity[]>,
  state: WritableStateSource<object>
) {
  return rxMethod<OptionChanged>(
    pipe(
      switchMap(({ query, key }) =>
        loader(query as T).pipe(
          tapResponse({
            next: (data) => patchState(state, { [key]: data }),
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
