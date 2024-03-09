import { AutocompleteOption } from "../shared/models/autocomplete-result";


export function setSelectId(option: AutocompleteOption) {
  return { selectId: option.id };
}

export function setIsMetric(isMetric: boolean) {
  return { isMetric };
}
