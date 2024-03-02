import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, type, withComputed, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { AutocompleteResOption } from '../shared/models/autocomplete-result';
import { CurrentWeatherResult } from '../shared/models/current-weather-result';
import { WeatherHttpService } from '../shared/services/weather-http.service';
import { initialState } from './state';
import { withLoadEntities } from './with-load-entity';
import { FutureWeatherResult } from '../shared/models/future-weather-result';

export const SignalSore = signalStore(
  { providedIn: 'root' },
  withDevtools('options'),
  withState(initialState),
  withLoadEntities(WeatherHttpService),
  withEntities({ entity: type<CurrentWeatherResult>(), collection: 'current' }),
  withEntities({ entity: type<FutureWeatherResult>(), collection: 'future' }),
  withComputed(({ entities, searchTerm }) => ({
    currentSelection: computed(
      () =>
        entities().find(
          (option) => option.LocalizedName.toLowerCase() === searchTerm()
        ) as AutocompleteResOption
    ),
  }))
);
