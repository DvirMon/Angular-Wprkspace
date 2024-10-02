import { inject, Injectable } from '@angular/core';
import { ContainsStrategy } from './filter-strategies/contains';
import { EqualsStrategy } from './filter-strategies/equals';
import { GreaterThanStrategy } from './filter-strategies/greaterThen';
import { LessThanStrategy } from './filter-strategies/lessThen';
import {
  FILTER_STRATEGIES,
  FilterStrategy,
} from './filter-strategies/strategies.types';

@Injectable({
  providedIn: 'root', // Register this service as a singleton
})
export class FilterStrategyService<T> {
  #strategies: Map<string, FilterStrategy<T>> = new Map();
  #injectedStrategies = inject(FILTER_STRATEGIES, { optional: true });

  constructor() {

    this.#setStrategies();

    if (this.#injectedStrategies && this.#injectedStrategies.length > 0) {
      this.#injectedStrategies.forEach((strategy) => {
        this.#strategies.set(strategy.operation, strategy);
      });
    }
  }

  getStrategy(operation: string): FilterStrategy<T> | undefined {
    return this.#strategies.get(operation);
  }

  #setStrategies() {
    this.#strategies.set('equals', new EqualsStrategy<T>());
    this.#strategies.set('contains', new ContainsStrategy<T>());
    this.#strategies.set('greaterThan', new GreaterThanStrategy<T>());
    this.#strategies.set('lessThan', new LessThanStrategy<T>());
  }
}
