import { signalStoreFeature, withState, withMethods, patchState } from "@ngrx/signals";

export const withLoaded = () =>
  signalStoreFeature(
    withState({ isLoaded: false }),
    withMethods((state) => ({
      setLoading(value: boolean) {
        patchState(state, { isLoaded: value });
      },
    })),
  );