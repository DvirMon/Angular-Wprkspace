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
import { withOptions } from './with-options.feature';

export const OptionsStore = signalStore(
  { providedIn: 'root' },
  withDevtools('options'),
  withState({ selectedId: 1 }),
  withOptions(WeatherService, 'options'),
  withComputed((store) => ({
    optionSelected: computed(() => store.entityMap()[store.selectedId()]),
  })),
  withMethods((state) => ({
    setCurrentId(value: string) {
      const option = state
        .entities()
        .find((option) => compareTo(option, value));
      patchState(state, { selectedId: option?.id });
    },

    updateCurrentId(option: AutocompleteOption) {
      patchState(state, { selectedId: option.id });
    },
  })),
  withHooks({
    onInit(store) {
      store.loadOptions();
      store.setCurrentId("tel aviv")
    },
  })
);

function compareTo(option: AutocompleteOption, value: string): boolean {
  return option.LocalizedName.toLowerCase() === value;
}
