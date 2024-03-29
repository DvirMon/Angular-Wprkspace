import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import {
  FutureWeather,
  FutureWeatherArgs,
} from '../weather/models/future-weather-MediaResult';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from '@dom';

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
