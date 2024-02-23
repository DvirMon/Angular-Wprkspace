import { EnhancerOptions } from 'redux-devtools-extension';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: {
      connect(options?: EnhancerOptions): ReduxDevToolsExtensionConnection;
    };
  }
}

interface ReduxDevToolsExtensionConnection {
  init(state?: unknown): void;
  send(action: unknown, state?: unknown): void;
  subscribe(listener: (message: unknown) => void): void;
  unsubscribe(): void;
}

export interface StoreOptions { name: string }

export class DevTools {
  protected readonly devTools: ReduxDevToolsExtensionConnection | null = null;
  private readonly options: StoreOptions

  constructor(initialState: unknown, options: StoreOptions) {

    this.options = options

    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect();
      this.devTools.send(`${this.options.name} - @init`, initialState); // sending a custom action
    }
  }

  protected sendToDevTools(value: string, state: unknown) {
    if (this.devTools) {
      const action = `${this.options.name} - ` + value
      this.devTools.send(action, state);
    }
  }
}
