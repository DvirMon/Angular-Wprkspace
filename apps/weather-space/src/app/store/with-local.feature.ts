import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';

export function withLocal() {
  signalStoreFeature(
    withState<{ isLocal: boolean }>({ isLocal: true }),
    withMethods((state) => ({
      updateIsLocal(value: boolean) {
        patchState(state, updateIsLocal(value));
      },
    }))
  );
}

function updateIsLocal(isLocal: boolean) {
  return { isLocal };
}
