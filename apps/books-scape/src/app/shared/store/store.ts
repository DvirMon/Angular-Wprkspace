import { Signal, WritableSignal, computed, signal } from "@angular/core";
import { DevTools, StoreOptions } from "./devtools";

export class Store<T> extends DevTools {

  private readonly state: WritableSignal<T>;

  constructor(initialState: T, options : StoreOptions) {
    super(initialState, options);
    this.state = signal(initialState);

  }

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  public update(param: Partial<T> | ((state: T) => Partial<T>)): void {
    this.state.update((state) => {
      const newState = typeof param === 'function' ? param(state) : param;
      return { ...state, ...newState };
    });

    this.sendToDevTools('UPDATE_STATE', this.state());
  }
}
