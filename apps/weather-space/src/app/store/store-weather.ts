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
  selectedId: number;
}

const initialState: WeatherState = {
  isMetric: true,
  geolocation: true,
  selectedId: 1,
};

export const WeatherStore = signalStore(
  { providedIn: 'root' },
  withDevtools('weather'),
  withState(initialState),
  withCurrentWeather(WeatherService, 'current'),
  withFutureWeather(WeatherService),
  withComputed((store) => ({
    currentWeather: computed(() => store.currentEntityMap()[store.selectedId()]),
    futureWeather: computed(() => store.futureEntityMap()[store.selectedId()]),
    futureArgs: computed(() => {
      return { id: store.selectedId(), metric: store.isMetric() };
    }),
  })),
  withMethods((state) => ({
    updateSelectedId(option: AutocompleteOption) {
      patchState(state, updateSelectedId(option));
    },
    updateIsMetric(isMetric: boolean) {
      patchState(state, updateIsMetric(isMetric));
    },
  })),

  withHooks({
    onInit(store) {
      store.loadCurrentWeather(store.selectedId);
      store.loadFutureWeather(store.futureArgs);
    },
  })
);
