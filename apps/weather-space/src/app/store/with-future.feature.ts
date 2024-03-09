import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import {
  FutureWeather,
  FutureWeatherArgs,
} from '../shared/models/future-weather-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';

type FutureWeatherLoader = Loader<
  FutureWeatherArgs,
  Entity,
  'loadFutureWeather'
>;

export function withFutureWeather(Loader: LoaderService<FutureWeatherLoader>) {
  return signalStoreFeature(
    withEntities({ entity: type<FutureWeather>(), collection: 'future' }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadFutureWeather');
      return {
        loadFutureWeather: loadEntities(loader, state, 'future'),
      };
    })
  );
}
