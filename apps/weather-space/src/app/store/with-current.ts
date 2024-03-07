import { tapResponse } from '@ngrx/operators';
import {
  StateSignal,
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { EntityId } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import {
  Entity,
  EntityResult,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';

type WeatherLoader = Loader<Entity, 'loadCurrentWeather'>;

type Map = Record<EntityId, Entity>;

// Function to handle the success response of loading entities
function handleLoadSuccess<Entity extends { id: EntityId }>(
  state: StateSignal<object>,
  slice: Map
) {
  return (res: EntityResult<Entity>) =>
    patchState(state, updateMap(slice, res.content[0]));
}

// Refactored withLoadEntities function
export function withCurrentWeatherMap(Loader: LoaderService<WeatherLoader>) {
  return signalStoreFeature(
    withState<{ currentMap: Map }>({ currentMap: {} }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadCurrentWeather');
      return {
        loadCurrentWeather: loadEntities(loader, state, state.currentMap(), handleLoadSuccess),
      };
    })
  );
}

export function updateMap(state: {}, entity: Entity) {
  return { currentMap: { ...state, [entity.id]: entity } };
}
