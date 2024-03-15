import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';
import { withEntities } from '@ngrx/signals/entities';
import { CurrentWeather } from '../shared/models/current-weather-result';

type WeatherLoader = Loader<number, Entity, 'loadCurrentWeather'>;

const COLLECTION = "current"

export function withCurrentWeather(
  Loader: LoaderService<WeatherLoader>) {
  return signalStoreFeature(
    withEntities({ entity: type<CurrentWeather>(), collection: COLLECTION }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadCurrentWeather');
      return {
        loadCurrentWeather: loadEntities(loader, state, COLLECTION),
      };
    })
  );
}
