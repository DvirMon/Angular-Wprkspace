import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, type, withComputed, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import { CurrentWeatherResult } from '../shared/models/current-weather-result';
import { WeatherHttpService } from '../shared/services/weather-http.service';
import { initialState } from './state';
import { withLoadEntities } from './with-load-entity';
import { FutureWeatherResult } from '../shared/models/future-weather-result';
import { FavoriteCard } from '../features/weather-favorite-card/favorite-card.component';

export const SignalSore = signalStore(
  { providedIn: 'root' },
  withDevtools('options'),
  withState(initialState),
  withEntities({ entity: type<AutocompleteOption>(), collection: 'options' }),
  withLoadEntities(WeatherHttpService, "options"),
  withEntities({ entity: type<CurrentWeatherResult>(), collection: 'current' }),
  withEntities({ entity: type<FutureWeatherResult>(), collection: 'future' }),
  withEntities({ entity: type<FavoriteCard>(), collection: 'favorites' }),
  withComputed(({ optionsEntities, searchTerm }) => ({
    currentSelection: computed(
      () =>
      optionsEntities().find(
          (option) => option.LocalizedName.toLowerCase() === searchTerm()
        ) as AutocompleteOption
    ),
  }))
);
