import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, type, withComputed } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { FavoriteCard } from '../features/weather-favorite-card/favorite-card.component';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import { CurrentWeather } from '../shared/models/current-weather-result';
import { WeatherHttpService } from '../shared/services/weather-http.service';
import { withLoadEntities } from './with-load-entity.feature';
import { withCurrentWeather } from './with-current.feature';
import { withCurrentSelection } from './with-select.feature';

export const SignalSore = signalStore(
  { providedIn: 'root' },
  withDevtools('options'),
  withEntities({ entity: type<AutocompleteOption>(), collection: 'options' }),
  withLoadEntities(WeatherHttpService, 'options'),
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
  withEntities({ entity: type<CurrentWeather>(), collection : "current"}),
  withCurrentWeather(),
  withComputed(({ currentEntityMap, selection }) => ({
    currentWeather: computed(() => currentEntityMap()[selection().id]),
  })),

  withEntities({ entity: type<FavoriteCard>(), collection: 'favorites' })
);
