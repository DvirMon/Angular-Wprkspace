import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, type, withComputed } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { CurrentWeather } from '../shared/models/current-weather-result';
import { FutureWeather } from '../shared/models/future-weather-result';
import { WeatherHttpService } from '../shared/services/weather-http.service';
import { withCurrentWeather } from './with-current.feature';
import { withFutureWeather } from './with-future.feature';
import { withCurrentSelection } from './with-select.feature';

export const WeatherSore = signalStore(
  { providedIn: 'root' },
  withDevtools('weather'),
  withCurrentSelection(),
  withEntities({ entity: type<CurrentWeather>(), collection: 'current' }),
  withCurrentWeather(WeatherHttpService, 'current'),
  withEntities({ entity: type<FutureWeather>(), collection: 'future' }),
  withFutureWeather(WeatherHttpService, 'future'),
  withComputed(({ currentEntityMap, futureEntityMap, selection }) => ({
    currentWeather: computed(() => {
      const res = selection();
      console.log(res)
      // console.log("store", id)
      return currentEntityMap()[selection().id];
    }),
    futureWeather: computed(() => futureEntityMap()[selection().id]),
  }))
);
