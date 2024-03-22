import { AutocompleteOption } from '../weather/models/autocomplete-result';

export function updateSelectedId(option: AutocompleteOption) {
  return { selectedId: option.id };
}

export function updateIsMetric(isMetric: boolean) {
  return { isMetric };
}
