import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntitiesQueryMethod,
} from './entities.helpers';
import { withEntities } from '@ngrx/signals/entities';
import { CurrentWeather } from '../shared/models/current-weather-result';

type WeatherLoader = Loader<Entity, 'loadCurrentWeather'>;

// Refactored withLoadEntities function
export function withCurrentWeather(
  Loader: LoaderService<WeatherLoader>,
  collection: string
) {
  return signalStoreFeature(
    withEntities({ entity: type<CurrentWeather>(), collection: 'current' }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadCurrentWeather');
      return {
        
        loadCurrentWeather: loadEntitiesQueryMethod(loader, state, collection),
      };
    })
  );
}
