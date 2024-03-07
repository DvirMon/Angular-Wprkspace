import { signalStoreFeature, withMethods } from '@ngrx/signals';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntitiesQueryMethod,
} from './entities.helpers';

type WeatherFutureLoader = Loader<Entity, 'loadFutureWeather'>;

// Refactored withLoadEntities function
export function withFutureWeather(
  Loader: LoaderService<WeatherFutureLoader>,
  collection: string
) {
  return signalStoreFeature(
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadFutureWeather');
      return {
        loadFutureWeather: loadEntitiesQueryMethod(loader, state, collection),
      };
    })
  );
}
