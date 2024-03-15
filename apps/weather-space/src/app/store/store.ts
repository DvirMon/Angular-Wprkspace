import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import { WeatherService } from '../shared/services/weather.service';
import { updateIsMetric } from './updaters';
import { withCurrentWeather } from './with-current.feature';
import { withFutureWeather } from './with-future.feature';
import { withOptions } from './with-options.feature';
import { withFavorites } from './with-favorites.feature';

interface State {
  isLocal: boolean;
  isMetric: boolean;
  isGeolocation: boolean;
  selectedId: number;
}

const initialState: State = {
  isLocal: true,
  isMetric: true,
  isGeolocation: true,
  selectedId: -1,
};

export const Store = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withState(initialState),
  withOptions(WeatherService),
  withCurrentWeather(WeatherService),
  withFutureWeather(WeatherService),
  withFavorites(),
  withComputed((store) => ({
    optionSelected: computed(
      () => store.optionsEntityMap()[store.selectedId()]
    ),
    hasFavorites: computed(() => !!store.favoritesEntityMap),
  })),
  withMethods((state) => ({
    setCurrentId(value: string) {
      const option = state
        .optionsEntities()
        .find((option) => compareTo(option, value));
      patchState(state, { selectedId: option?.id });
    },

    updateCurrentId(id: number) {
      patchState(state, { selectedId: id });
    },

    updateIsMetric(isMetric: boolean) {
      patchState(state, updateIsMetric(isMetric));
    },
  }))
);

function compareTo(option: AutocompleteOption, value: string): boolean {
  return option ? option.LocalizedName.toLowerCase() === value : false;
}
