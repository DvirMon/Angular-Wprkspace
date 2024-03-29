import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore } from '@ngrx/signals';
import { AutocompleteOption } from '../weather/models/autocomplete-result';

export const OptionsStore = signalStore(
  { providedIn: 'root' },
  withDevtools('options')
  // withState({ selectedId: -1 }),
  // withOptions(WeatherService, {}),
  // withComputed((store) => ({
  //   optionSelected: computed(() => store.optionsEntityMap()[store.selectedId()]),
  // })),
  // withMethods((state) => ({
  //   setCurrentId(value: string) {
  //     const option = state
  //       .optionsEntities()
  //       .find((option) => compareTo(option, value));
  //     patchState(state, { selectedId: option?.id });
  //   },

  //   updateCurrentId(id: number) {
  //     patchState(state, { selectedId: id });
  //   },
  // }))
);

function compareTo(option: AutocompleteOption, value: string): boolean {
  return option ? option.LocalizedName.toLowerCase() === value : false;
}
