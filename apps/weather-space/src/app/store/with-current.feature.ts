import { signalStoreFeature, withMethods } from '@ngrx/signals';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntitiesQueryMethod,
} from './entities.helpers';

type WeatherLoader = Loader<Entity, 'loadCurrentWeather'>;

// Refactored withLoadEntities function
export function withCurrentWeather(
  Loader: LoaderService<WeatherLoader>,
  collection: string
) {
  return signalStoreFeature(
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadCurrentWeather');
      return {
        loadCurrentWeather: loadEntitiesQueryMethod(loader, state, collection),
      };
    })
  );
}
