import { ProviderToken } from '@angular/core';
import { EntityId } from '@ngrx/signals/entities';
import { Observable } from 'rxjs';

export interface Entity {
  id: EntityId;
}

export type EntityMap = Record<EntityId, Entity>;

export type Loader<T, Entity, MethodName extends string> = {
  [K in MethodName]: (args: T) => Observable<Entity[]>;
};

export type LoaderService<Loader> = ProviderToken<Loader>;
