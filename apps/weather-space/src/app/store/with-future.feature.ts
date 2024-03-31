import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from '@dom';
import {
  FutureWeatherArgs,
  FutureWeather,
} from '../weather/models/future-weather-result';

type FutureWeatherLoader = Loader<
  FutureWeatherArgs,
  Entity,
  'loadFutureWeather'
>;

const COLLECTION = 'future';

export function withFutureWeather(Loader: LoaderService<FutureWeatherLoader>) {
  return signalStoreFeature(
    withEntities({ entity: type<FutureWeather>(), collection: COLLECTION }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadFutureWeather');
      return {
        loadFutureWeather: loadEntities(loader, state, COLLECTION),
      };
    })
  );
}
