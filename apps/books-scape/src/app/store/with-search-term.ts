import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from "@ngrx/signals";

export const withSearchTerm = () =>
  signalStoreFeature(
    withState({ searchTerm: "angular" }),
    withMethods((state) => ({
      setSearchTerm(value: string) {
        patchState(state, { searchTerm: value });
      },
    }))
  );
