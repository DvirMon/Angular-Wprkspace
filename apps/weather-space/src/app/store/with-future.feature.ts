import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { EntityId, withEntities } from '@ngrx/signals/entities';
import { FutureWeather } from '../shared/models/future-weather-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities
} from './entities.helpers';

type WeatherFutureArgs = { id: EntityId; metric: boolean };

type WeatherFutureLoader = Loader<
  WeatherFutureArgs,
  Entity,
  'loadFutureWeather'
>;

export function withFutureWeather(Loader: LoaderService<WeatherFutureLoader>) {
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
