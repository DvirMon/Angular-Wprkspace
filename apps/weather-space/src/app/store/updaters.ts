import { AutocompleteOption } from '../shared/models/autocomplete-result';

export function updateSelectId(option: AutocompleteOption) {
  return { selectId: option.id };
}

export function updateIsMetric(isMetric: boolean) {
  return { isMetric };
}
