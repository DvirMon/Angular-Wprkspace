import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import { WeatherService } from '../shared/services/weather.service';
import { updateIsMetric, updateSelectedId } from './updaters';
import { withCurrentWeather } from './with-current.feature';
import { withFutureWeather } from './with-future.feature';

interface WeatherState {
  isMetric: boolean;
  geolocation: boolean;
}

const initialState: WeatherState = {
  isMetric: true,
  geolocation: true,
};

export const WeatherStore = signalStore(
  { providedIn: 'root' },
  withDevtools('weather'),
  withState(initialState),
  withCurrentWeather(WeatherService, 'current'),
  withFutureWeather(WeatherService),
  withMethods((state) => ({
    updateIsMetric(isMetric: boolean) {
      patchState(state, updateIsMetric(isMetric));
    },
  }))
);
