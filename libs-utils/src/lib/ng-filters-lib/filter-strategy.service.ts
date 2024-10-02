import { inject, Injectable, Injector } from '@angular/core';
import { ContainsStrategy } from './filter-strategies/contains';
import { EqualsStrategy } from './filter-strategies/equals';
import { GreaterThanStrategy } from './filter-strategies/greaterThen';
import { LessThanStrategy } from './filter-strategies/lessThen';
import {
  FILTER_STRATEGIES,
  FilterStrategy,
} from './filter-strategies/strategies.types';
import { FilterOperation } from './filter.types';

@Injectable({
  providedIn: 'root', // Register this service as a singleton
})
export class FilterStrategyService<T> {
  #strategies: Map<string, FilterStrategy<T>> = new Map();
  #strategyFactories: Map<string, () => FilterStrategy<T>> = new Map(); // Lazy-loading strategy factories
  #injectedStrategies = inject(FILTER_STRATEGIES, { optional: true });
  #injector = inject(Injector);

  constructor() {
    // this.#setStrategies();

    this.#setBuiltInStrategyFactories();

    if (this.#injectedStrategies && this.#injectedStrategies.length > 0) {
      this.#injectedStrategies.forEach((strategy) => {
        this.#strategies.set(strategy.operation, strategy);
      });
    }
  }
  getStrategy(operation: string): FilterStrategy<T> | undefined {
    // Step 1: Try to get the built-in strategy factory or undefined
    const strategyFactory = this.#strategyFactories.get(operation);

    // Step 2: Check if it's a built-in operation (returns true or false)
    const isBuiltInOperation = Object.values(FilterOperation).includes(
      operation as FilterOperation
    );

    // Step 3: Immediately throw if it's a required built-in strategy but undefined
    isBuiltInOperation &&
      !strategyFactory &&
      this.#throwMissingStrategyError(operation);

    const strategy = strategyFactory?.() || this.#strategies.get(operation);

    strategy ?? console.warn(`No strategy found for operation "${operation}".`);

    // Cache and return the strategy if found
    strategy && this.#strategies.set(operation, strategy);

    return strategy;
  }

  #setBuiltInStrategyFactories() {
    // Use the injector to lazily load strategies when needed
    this.#strategyFactories.set(FilterOperation.EQUALS, () =>
      this.#injector.get(EqualsStrategy)
    );
    this.#strategyFactories.set(FilterOperation.CONTAINS, () =>
      this.#injector.get(ContainsStrategy)
    );
    // this.#strategyFactories.set(FilterOperation.GREATER_THAN, () =>
    //   this.#injector.get(GreaterThanStrategy)
    // );
    // this.#strategyFactories.set(FilterOperation.LESS_THAN, () =>
    //   this.#injector.get(LessThanStrategy)
    // );
  }

  #throwMissingStrategyError(operation: string): never {
    console.error(`Strategy for operation "${operation}" not found.`);
    throw new Error(
      `Required built-in strategy for operation "${operation}" not found.`
    );
  }

}
