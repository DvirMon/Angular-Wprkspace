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
import { setIsMetric, setSelectId } from './setters';
import { initialState } from './state';
import { withCurrentWeather } from './with-current.feature';
import { withFutureWeather } from './with-future.feature';
import { withOptions } from './with-options.feature';

export const Store = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withState(initialState),
  withOptions(WeatherService, 'options'),
  withCurrentWeather(WeatherService, 'current'),
  withFutureWeather(WeatherService, 'future'),
  // withEntities({ entity: type<FavoriteCard>(), collection: 'favorites' }),
  withComputed((store) => ({
    optionSelected: computed(
      () =>
        store
          .optionsEntities()
          .find(
            (option) =>
              option.LocalizedName.toLowerCase() ===
              store.searchTerm().toLowerCase()
          ) as AutocompleteOption
    ),
    currentWeather: computed(() => store.currentEntityMap()[store.selectId()]),
    futureWeather: computed(() => store.futureEntityMap()[store.selectId()]),
    futureArgs: computed(() => {
      return { id: store.selectId(), metric: store.isMetric() };
    }),
  })),
  withMethods((state) => ({
    updateSelectId(option: AutocompleteOption) {
      patchState(state, setSelectId(option));
    },
    updateIsMetric(isMetric: boolean) {
      patchState(state, setIsMetric(isMetric));
    },
  })),

  withHooks({
    onInit(store) {
      store.loadOptions(store.searchTerm);
      store.loadCurrentWeather(store.selectId);
      store.loadFutureWeather(store.futureArgs);
    },
  })
  // withIsMetric(),
);
