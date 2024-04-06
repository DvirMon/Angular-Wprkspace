import { ProviderToken } from '@angular/core';
import { EntityId } from '@ngrx/signals/entities';
import { Observable } from 'rxjs';

export interface Entity {
  id: EntityId;
}

export type EntityMap = Record<EntityId, Entity>;

/**
 * Represents a generic type defining methods for loading entities.
 * @template T The type of the method parameter.
 * @template Entity The type of the entities being loaded.
 * @template MethodName The name of the methods defined in the loader.
 */
export type EntityLoader<T, Entity, MethodName extends string> = {
  [K in MethodName]: (args: T) => Observable<Entity[] | Entity>;
};

export type LoaderService<EntityLoader> = ProviderToken<EntityLoader>;
