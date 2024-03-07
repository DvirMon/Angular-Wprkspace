import {patchState, signalStoreFeature, withMethods, withState,} from '@ngrx/signals';
import {AutocompleteOption} from '../shared/models/autocomplete-result';

export interface SelectionResult {
  id: number;
  name: string;
  favorite: boolean;
}

export function withCurrentSelection() {
  return signalStoreFeature(
    withState<{ selection: SelectionResult }>({
      selection: { name: 'tel aviv', id: 1, favorite: false },
    }),

    withMethods((state) => ({
      updateSelection(option: AutocompleteOption) {
        patchState(state, setFromOption(state.selection(), option));
      },
    }))
  );
}

export function setFromOption(
  state: SelectionResult,
  option: AutocompleteOption
) {
  return { selection: { ...state, id: option.id, name: option.LocalizedName } };
}
