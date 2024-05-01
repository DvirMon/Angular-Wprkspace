import { StateSignal } from '@ngrx/signals';
import { EntityId } from '@ngrx/signals/entities';
import { Observable } from 'rxjs';
import { Entity, EntityLoader, LoaderService } from './types';
export declare function onLoadSlice<Entity extends {
    id: EntityId;
}>(state: StateSignal<object>, slice: keyof StateSignal<object>): (res: Entity[] | Entity) => void;
export declare function onLoadEntities<Entity extends {
    id: EntityId;
}>(state: StateSignal<object>): (res: Entity[]) => void;
export declare function onLoadCollection<Entity extends {
    id: EntityId;
}>(state: StateSignal<object>, collection: string): (res: Entity[] | Entity) => void;
export declare function onUpdateCollection<Entity extends {
    id: EntityId;
}>(state: StateSignal<object>, collection: string): (res: Entity[] | Entity) => void;
/**
 * Creates a function that invokes a specified method on a LoaderService instance.
 * @param Loader The LoaderService instance.
 * @param methodName The name of the method to invoke on the LoaderService instance.
 * @returns A function that accepts parameters for the specified method and returns an Observable of the result.
 * @template T The type of parameters accepted by the method.
 */
export declare function createLoader<T>(Loader: LoaderService<EntityLoader<T, Entity, string>>, methodName: string): (...args: T[]) => Observable<Entity[] | Entity>;
export declare function loadCollection<T>(loader: (query: T) => Observable<Entity[]>, next: (value: Entity[]) => void): ((input: T | Observable<T> | import("@angular/core").Signal<T>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
/**
 * Loads entities using the provided loader function and invokes the specified
 * callback with the result.
 * @param loader A function that accepts a query parameter of type T and returns
 *               an Observable of Entity or Entity[].
 * @param next A callback function to handle the result of the loading operation.
 * @template T The type of the query parameter.
 */
export declare function loadEntities<T>(loader: (query: T) => Observable<Entity[] | Entity>, next: (value: Entity[] | Entity) => void): ((input: T | Observable<T> | import("@angular/core").Signal<T>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
export declare function loadSlice<T>(loader: (query: T) => Observable<Entity[] | Entity>, state: StateSignal<object>, slice: string): ((input: T | Observable<T> | import("@angular/core").Signal<T>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
