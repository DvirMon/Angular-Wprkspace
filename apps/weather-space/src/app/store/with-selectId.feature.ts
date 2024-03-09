import {
    patchState,
    signalStoreFeature,
    withMethods,
    withState,
} from '@ngrx/signals';
import { AutocompleteOption } from '../shared/models/autocomplete-result';

export function withSelectedId() {
  signalStoreFeature(
    withState<{ selectedId: number }>({ selectedId: 1 }),
    withMethods((state) => ({
      updateSelectId(option: AutocompleteOption) {
        patchState(state, updateSelectId(option));
      },
    }))
  );
}

function updateSelectId(option: AutocompleteOption) {
  return { selectedId: option.id };
}
