import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, withComputed, withHooks, withState } from '@ngrx/signals';
import { AutocompleteOption } from '../shared/models/autocomplete-result';
import { WeatherService } from '../shared/services/weather.service';
import { withOptions } from './with-options.feature';

export const Store = signalStore(
  { providedIn: 'root' },
  withDevtools('options'),
  withState({ searchTerm: 'tel aviv' }),
  withOptions(WeatherService, 'options'),
  withComputed((store) => ({
    optionSelected: computed(
      () =>
        store
          .entities()
          .find(
            (option) =>
              option.LocalizedName.toLowerCase() ===
              store.searchTerm().toLowerCase()
          ) as AutocompleteOption
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadOptions(store.searchTerm);
    },
  })
);
