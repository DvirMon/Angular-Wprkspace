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
import { updateIsMetric, updateSelectId } from './updaters';
import { withCurrentWeather } from './with-current.feature';
import { withFutureWeather } from './with-future.feature';

interface WeatherState {
  isMetric: boolean;
  geolocation: boolean;
  selectId: number;
}

const initialState: WeatherState = {
  isMetric: true,
  geolocation: true,
  selectId: 1,
};

export const WeatherStore = signalStore(
  { providedIn: 'root' },
  withDevtools('weather'),
  withState(initialState),
  withCurrentWeather(WeatherService, 'current'),
  withFutureWeather(WeatherService),
  withComputed((store) => ({
    currentWeather: computed(() => store.currentEntityMap()[store.selectId()]),
    futureWeather: computed(() => store.futureEntityMap()[store.selectId()]),
    futureArgs: computed(() => {
      return { id: store.selectId(), metric: store.isMetric() };
    }),
  })),
  withMethods((state) => ({
    updateSelectId(option: AutocompleteOption) {
      patchState(state, updateSelectId(option));
    },
    updateIsMetric(isMetric: boolean) {
      patchState(state, updateIsMetric(isMetric));
    },
  })),

  withHooks({
    onInit(store) {
      store.loadCurrentWeather(store.selectId);
      store.loadFutureWeather(store.futureArgs);
    },
  })
);
