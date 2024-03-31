import { ProviderToken, Signal } from '@angular/core';
import { StateSignal } from '@ngrx/signals';
import { EntityId } from '@ngrx/signals/entities';
import { Observable } from 'rxjs';
export interface Entity {
  id: EntityId;
}
export type EntityMap = Record<EntityId, Entity>;
export interface EntityMediaResult<Entity> {
  content: Entity[];
}
export type Loader<T, Entity, MethodName extends string> = {
  [K in MethodName]: (args: T) => Observable<EntityMediaResult<Entity>>;
};
export type LoaderService<T> = ProviderToken<T>;
export type LoadService<Loader> = ProviderToken<Loader>;
export declare function handleLoadEntitiesSuccess<
  Entity extends {
    id: EntityId;
  }
>(state: unknown, collection: string): (res: EntityMediaResult<Entity>) => void;
export declare function createLoader<T>(
  Loader: LoadService<Loader<T, Entity, string>>,
  methodName: string
): (...args: T[]) => Observable<EntityMediaResult<Entity>>;
export declare function loadEntities<T>(
  loader: (query: T) => Observable<EntityMediaResult<Entity>>,
  state: StateSignal<object>,
  collection?: string
): ((input: T | Observable<T> | Signal<T>) => import('rxjs').Unsubscribable) &
  import('rxjs').Unsubscribable;
export declare function createSliceLoader<T>(
  Loader: LoadService<Loader<T, Entity, string>>,
  methodName: string
): (args: T) => Observable<EntityMediaResult<Entity>>;
export declare function loadSlice<T>(
  loader: (query: T) => Observable<EntityMediaResult<Entity>>,
  state: StateSignal<object>,
  slice: string
): ((input: T | Observable<T> | Signal<T>) => import('rxjs').Unsubscribable) &
  import('rxjs').Unsubscribable;
