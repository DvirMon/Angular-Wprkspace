import { ProviderToken } from '@angular/core';
import { EntityId } from '@ngrx/signals/entities';
import { Observable } from 'rxjs';

export interface Entity {
  id: EntityId;
}

export type EntityMap = Record<EntityId, Entity>;

export type EntityLoader<T, Entity, MethodName extends string> = {
  [K in MethodName]: (args: T) => Observable<Entity[] | Entity>;
};

export type LoaderService<EntityLoader> = ProviderToken<EntityLoader>;
