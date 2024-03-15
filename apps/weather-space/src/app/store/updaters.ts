import { AutocompleteOption } from '../shared/models/autocomplete-result';

export function updateSelectedId(option: AutocompleteOption) {
  return { selectedId: option.id };
}

export function updateIsMetric(isMetric: boolean) {
  return { isMetric };
}

export function updateIsLocal(isLocal: boolean) {
  return { isLocal };
}
