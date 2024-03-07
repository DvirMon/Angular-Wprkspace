import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, type, withComputed, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { FavoriteCard } from '../features/weather-favorite-card/favorite-card.component';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import { WeatherHttpService } from '../shared/services/weather-http.service';
import { withOptions } from './with-options.feature';
import { withCurrentSelection } from './with-select.feature';
import { withCurrentWeatherMap } from './with-current';
import { initialState } from './state';
import { CurrentWeather } from '../shared/models/current-weather-result';

export const Store = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withState(initialState),
  withEntities({ entity: type<AutocompleteOption>(), collection: 'options' }),
  withOptions(WeatherHttpService, 'options'),
  withCurrentSelection(),
  withComputed((store) => ({
    optionSelected: computed(
      () =>
        store
          .optionsEntities()
          .find(
            (option) =>
              option.LocalizedName.toLowerCase() ===
              store.selection().name.toLowerCase()
          ) as AutocompleteOption
    ),
  })),
  withEntities({ entity: type<FavoriteCard>(), collection: 'favorites' }),
  withCurrentWeatherMap(WeatherHttpService),
  withComputed(({ currentMap, selection }) => ({
    currentWeather: computed(() => {
      const res = selection();
      console.log(res);
      return currentMap()[selection().id] as CurrentWeather;
    }),
  }))
);
