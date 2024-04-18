import {
  Injectable,
  Injector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, Observable, pipe, switchMap, tap } from 'rxjs';
import { Entity, EntityLoader, LoaderService } from './types';

@Injectable({ providedIn: 'root' })
export class EntityService {
  
  createLoader<T>(
    Loader: LoaderService<EntityLoader<T, Entity, string>>,
    methodName: string
  ): (...args: T[]) => Observable<Entity[]> {
    return runInInjectionContext(inject(Injector), () => {
      const loader = inject(Loader);
      return (query: T) => loader[methodName](query);
    });
  }

  loadEntities<T>(
    loader: (query: T) => Observable<Entity[]>,
    next: (data: Entity[]) => void
  ) {
    return rxMethod<T>(
      pipe(
        switchMap((query) =>
          loader(query).pipe(
            tapResponse({
              next: (data: Entity[]) => next(data),
              error: () => EMPTY,
            })
          )
        )
      )
    );
  }

  loadSlice<T>(
    loader: (query: T) => Observable<Entity[]>,
    state: StateSignal<object>,
    slice: string
  ) {
    return rxMethod<T>(
      pipe(
        switchMap((query: T) =>
          loader(query).pipe(
            tap((v) => console.log(v)),
            tapResponse({
              next: (res: Entity[]) => patchState(state, { [slice]: res }),
              error: () => EMPTY,
            })
          )
        )
      )
    );
  }
}
