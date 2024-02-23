import { StoreOptions } from "./devtools";

export function createInitialState<T>(initialState?: T): T {
  return initialState || {} as T;
}

export function withStoreConfiguration(options: StoreOptions) {
  return options
}
